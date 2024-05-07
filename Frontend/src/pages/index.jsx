import Hero from "../components/hero";
import Trusted from "../components/trusted";
import Features from "../components/features";
import Footer from "../components/footer";

import "../css/hero.css";
import "../css/trusted.css";
import "../css/features.css"
import "../css/footer.css"
import "../css/features.css";
import CustomerBase from "../components/customerbase";

function Index() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <CustomerBase />
      <Footer />
    </>
  );
}

export default Index;
