import React from 'react'
import user from "../assets/imgs/user.png"

export const Hero = () => {
  return (
    <> 
    <section class="section1" id="header">
    <div class="hero grid">
      <div class="left flex">
        <img src={user} alt="profile pic" />
      </div>

      <div class="right flex">
        <div class="flex">
          <div class="name">Prem</div>
          <div class="tag">Soft. Engineer</div>
        </div>

        <button>
          <a href={user} download>
            Download CV <i class="fa-solid fa-download"></i
          ></a>
        </button>
      </div>
    </div>
  </section>

   {/* -- Banner --> */}
  <section class="section2">
    <div class="info-container flex">
      <div class="info-lists flex">
         {/* -- award  --> */}
        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>IT</h5>
            <p>Graduate</p>
          </span>
        </div>

        <div class="info-divider"></div>

         {/* -- project complete --> */}
        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>5 + Projects</h5>
            <p>Completed</p>
          </span>
        </div>

        <div class="info-divider"></div>

         {/* -- year experiences --> */}
        <div class="info-content flex">
          <div class="icon-container flex">
            <i class="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>1 + Year</h5>
            <p>Job Experience</p>
          </span>
        </div>
      </div>
    </div>
  </section></>
    
  )
}
