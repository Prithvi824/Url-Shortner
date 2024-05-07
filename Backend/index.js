// Core functionalities
import express, { response } from "express";
import connectToDatabase from "./database.js";

// Middle wares
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "dist")));
const pathManager = path

// ENV variables
dotenv.config();
const usersCollectionName = process.env.usersCollectionName;
const urlsCollectionName = process.env.urlsCollectionName;
const homeUrl = process.env.homeUrl;
const PORT = parseInt(process.env.PORT);

// Function to generate a random number not in database
async function generateHash() {
  // Fetch the database
  let { db } = await connectToDatabase();
  let urlsCollection = await db.collection(urlsCollectionName);

  // generate a name
  function generateName() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  async function validateName(name) {
    let uniqueness = await urlsCollection.findOne({ hash: name });
    return uniqueness ? false : true;
  }

  while (true) {
    let hash = generateName();
    let response = await validateName(hash);

    if (response) {
      return hash;
    }
  }
}

// Home
app.get("/", async function(req, res) {
  return res.sendFile(pathManager.join(process.cwd(), "dist", "index.html"));
})

// Login endpoint
app.post("/login", async function (req, res) {
  if (req.headers["content-type"] === "application/json") {
    // Fetch the database
    let { db } = await connectToDatabase();
    let usersCollection = await db.collection(usersCollectionName);

    if (req.body.email && req.body.userName && req.body.password) {
      // check if a user with the username exists
      let existingUser = await usersCollection.findOne({
        userName: req.body.userName,
      });

      // if no existing user create one else send a userExist error
      if (!existingUser) {
        let singupResponse = await usersCollection.insertOne({
          userName: req.body.userName,
          password: req.body.password,
          email: req.body.email,
          urls: {},
        });

        // send the success response
        if (singupResponse.acknowledged) {
          return res.status(200).send({
            success: true,
            urls: {},
            userName: req.body.userName,
            email: req.body.email,
          });
        }
        // internal server error
        return res.status(500).send({ success: false });
      } else {
        return res.status(200).send({ success: false, userExist: true });
      }
    } else if (req.body.userName && req.body.password) {
      // check if a user with the username exists
      let existingUser = await usersCollection.findOne({
        userName: req.body.userName,
      });

      // if No existing user send a UserExist error else compare credentials
      if (!existingUser) {
        return res.status(200).send({ success: false, userExist: false });
      } else if (existingUser.password === req.body.password) {
        return res.status(200).send({
          success: true,
          userName: existingUser.userName,
          email: existingUser.email,
          urls: existingUser.urls,
        });
      }
    } else {
      return res.sendStatus(400); // Send a bad request for everything else
    }
  }
});

// Generate a url endpoint
app.post("/generate", async function (req, res) {
  if (req.body.url) {
    // Fetch the database
    let { db } = await connectToDatabase();
    let urlsCollection = await db.collection(urlsCollectionName);
    let usersCollection = await db.collection(usersCollectionName);

    // Put the unique extension on the database
    let ending = await generateHash();
    let databaseUploadres = await urlsCollection.insertOne({
      name: ending,
      url: req.body.url,
    });

    usersCollection.updateOne(
      { userName: req.body.userName },
      { $set: { [`urls.${ending}`]: req.body.url } },
      function (err, result) {
        if (err) {
          return res.status(500).send({ shortUrl: "" });
        }
      }
    );

    // send response based on the database operation result
    if (databaseUploadres.acknowledged) {
      return res.status(200).send({ shortUrl: ending });
    }
    return res.status(500).send({ shortUrl: "" });
  }

  // Bad request
  return res.status(400).send({ shortUrl: "" });
});

// Update creds endpoint
app.post("/update", async function (req, res) {
  // Fetch the database
  let { db } = await connectToDatabase();
  let usersCollection = await db.collection(usersCollectionName);

  if (req.headers?.usernameupdate || false === "true") {
    const uniqueUsername = await usersCollection.findOne({
      userName: req.body.userName,
    });

    if (!uniqueUsername) {
      let updateResponse = await usersCollection.updateOne(
        { userName: req.body.owner },
        {
          $set: {
            userName: req.body.userName,
            email: req.body.email,
          },
        },
        function (err, result) {
          if (err) {
            console.log("some error occured: ", err);
          }
        }
      );

      if (updateResponse.acknowledged && updateResponse.modifiedCount > 0) {
        return res.status(200).send({ success: true });
      } else return res.status(500).send({ success: false });
    } else {
      return res.send({ userExist: true });
    }
  }

  if (req.headers?.emailupdate || false === "true") {
    let updateResponse = await usersCollection.updateOne(
      { userName: req.body.owner },
      {
        $set: {
          email: req.body.email,
        },
      },
      function (err, result) {
        if (err) {
          console.log("some error occured: ", err);
        }
      }
    );

    if (updateResponse.acknowledged && updateResponse.modifiedCount > 0) {
      return res.status(200).send({ success: true });
    } else return res.status(500).send({ success: false });
  }

  if (req.headers?.passwordupdate || false === "true") {
    let user = await usersCollection.findOne({ userName: req.body.owner });

    if (user && user.password === req.body.oldPass) {
      let response = await usersCollection.updateOne(
        { userName: req.body.owner },
        { $set: { password: req.body.newPass } },
        function (err, result) {
          if (err) {
            console.log("some error happened:", err);
          }
        }
      );

      if (response.acknowledged && response.modifiedCount > 0) {
        return res.send({ success: true });
      }
    }
  }

  return res.status(400).send({ success: false });
});

// Home and redirect endppoint
app.get("/*", async function (req, res) {
  // Fetch the database
  let { db } = await connectToDatabase();
  let urlsCollection = await db.collection(urlsCollectionName);

  const path = req.url != "/undefined" ? req.url.slice(1, req.url.length) : "/";

  if (path === "/" || path === "") {
    return res.redirect("/")
  }

  let redirectUrl = await urlsCollection.findOne({ name: path });
  if (redirectUrl) {
    return res.redirect(redirectUrl.url);
  } else {
    return res.redirect(homeUrl);
  }
});

// Start the app
app.listen(PORT, () => {
  console.log("The app is up and running on Port: ", PORT);
});