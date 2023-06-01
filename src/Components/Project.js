import React from 'react'
import ec from "../assets/imgs/ec.png"

export const Project = () => {
  return (

    <>
    <section class="section4 flex" id="projects">
    <h2 class="title">My Recent Work</h2>
    <div class="projects-container grid">
      <div class="project-card flex">
        <div class="top">
          <img src={ec} alt="" />
        </div>
        <div class="bottom">
          <p>Full-stack Web App built with React & Firebase</p>
          <p>Dec 15 2022</p>
        </div>
      </div>
      <div class="project-card flex">
        <div class="top">
          <img src={ec} alt="" />
        </div>
        <div class="bottom">
          <p>Full-stack Web App built with React & Firebase</p>
          <p>Dec 15 2022</p>
        </div>
      </div>
      <div class="project-card flex">
        <div class="top">
          <img src={ec} alt="" />
        </div>
        <div class="bottom">
          <p>Full-stack Web App built with React & Firebase</p>
          <p>Dec 15 2022</p>
        </div>
      </div>
      <div class="project-card flex">
        <div class="top">
          <img src={ec} alt="" />
        </div>
        <div class="bottom">
          <p>Full-stack Web App built with React & Firebase</p>
          <p>Dec 15 2022</p>
        </div>
      </div>
    </div>
  </section>
</>
    
  )
}
