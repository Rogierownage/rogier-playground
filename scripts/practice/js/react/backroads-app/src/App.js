import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import {links, socialIcons} from "./data";

function App() {
  return (
    <>  
      <Navbar links={links} socialIcons={socialIcons} />
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer links={links} socialIcons={socialIcons} />
    </>
  );
}

export default App;
