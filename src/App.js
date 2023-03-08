import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavBarMobile";
import About from "./views/About";
import HeroSection from "./views/HeroSection";
import useBodyScrollPosition from './hooks/useScrollPosition';
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const App = () =>{
  // const scrollPosition = useBodyScrollPosition();
  // console.log(scrollPosition)
  return (
    <div id="home" className="bg-slate-900 text-white">
      <Navbar/>
      <NavbarMobile/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <div className="h-[1000px]">

      </div>
    </div>
  );
}

export default App;
