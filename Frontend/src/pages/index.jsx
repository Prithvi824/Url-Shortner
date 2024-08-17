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
import useWindowWidth from "../assets/services/useWindowWidth";

function Index() {
  const width = useWindowWidth();
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      {width >= 600 && <CustomerBase />}
      <Footer />
    </>
  );
}

export default Index;
