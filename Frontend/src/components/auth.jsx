import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Authorize = createContext(null);

const STORAGE_KEY = "quicklink_auth";

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function Authenticator({ children }) {
  const [user, setUser] = useState(readStoredUser);

  // Persist across reloads so a refresh no longer logs the user out.
  useEffect(() => {
    if (user.token) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  return (
    <Authorize.Provider value={{ user, setUser }}>
      {children}
    </Authorize.Provider>
  );
}

Authenticator.propTypes = {
  children: PropTypes.node,
};

export default Authenticator;
