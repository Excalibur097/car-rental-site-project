import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import Collections from "./Collections"
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer"


export default function App(){
 
  return (
      <div className="App">
        <Navbar/> 
        <HeroSection/>
        <AboutSection/>
        <Services/>
        <Collections/>
        <Contact/>
        <Footer/>
      </div>
  ) 
}


