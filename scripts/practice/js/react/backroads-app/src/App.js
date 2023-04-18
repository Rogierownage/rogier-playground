import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceList from "./components/ServiceList";
import Tours from "./components/Tours";
import {links, socialIcons} from "./data";

function App() {
  return (
    <>  
      <Navbar links={links} socialIcons={socialIcons} />
      <Hero/>
      <About/>
      <ServiceList/>
      <Tours/>
      <Footer links={links} socialIcons={socialIcons} />
    </>
  );
}

export default App;
