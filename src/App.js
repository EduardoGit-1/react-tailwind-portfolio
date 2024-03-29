import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavBarMobile";
import About from "./views/About";
import HeroSection from "./views/HeroSection";
// import useBodyScrollPosition from './hooks/useScrollPosition';
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { useEffect, useState } from "react";



const App = () =>{
  // const scrollPosition = useBodyScrollPosition();
  const [activeLinkID, setActiveLinkID] = useState('home')
  useEffect(()=>{
    let section = document.querySelectorAll('section');
    window.onscroll = () => {
      section.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop;
          let height = sec.offsetHeight;

          if (top >= offset && top < offset + height) {
              sec.id ? setActiveLinkID(sec.id) : setActiveLinkID('home')
          }
      })
  };
  }, [])

  return (
    <div id="home" className="bg-slate-900 text-white h-full">
      <Navbar activeLinkID={activeLinkID}/>
      <NavbarMobile activeLinkID={activeLinkID}/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <div className="h-[30rem] htall:h-[50rem] hverytall:h-[80rem] h4k:h-[100rem]">

      </div>
    </div>
  );
}

export default App;
