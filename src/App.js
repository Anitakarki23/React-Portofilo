
import './App.css';
import "./style.css"
// import user image
import user from "./assets/imgs/user.png"
import ec from "./assets/imgs/ec.png"
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Skill } from './Components/Skill';
import { Project } from './Components/Project';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="">
      {/* Dark mode button */}
      <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />

<div class="wrapper">
  <Header />
  <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="skills" element={<Skill/>}/>
    <Route path="projects" element={<Project/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    
  </Routes>
  <Footer />
   {/* -- Hero --> */}

  

   {/* -- skills section --> */}

  

   {/* -- projects --> */}

  
   {/* -- about --> */}

  

   {/* -- getting touch --> */}

  

   {/* -- footer  --> */}
  
</div>
      
    </div>
  );
}

export default App;

// npm i react -router-DOM 
// wrap entire components 
// definr individaual page by using the routecomponment 