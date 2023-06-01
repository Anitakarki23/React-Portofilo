import React from 'react'
import user from "../assets/imgs/user.png"
import { Layout } from './Layout'

export const Hero = () => {
  return (
    <Layout> 
    <section className="section1" id="header">
    <div className="hero grid">
      <div className="left flex">
        <img src={user} alt="profile pic" />
      </div>

      <div className="right flex">
        <div className="flex">
          <div className="name">Anita</div>
          <div className="tag">Soft. Engineer</div>
        </div>

        <button>
          <a href={user} download>
            Download CV <i className="fa-solid fa-download"></i
          ></a>
        </button>
      </div>
    </div>
  </section>

   {/* -- Banner --> */}
  <section className="section2">
    <div className="info-container flex">
      <div className="info-lists flex">
         {/* -- award  --> */}
        <div className="info-content flex">
          <div className="icon-container flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>IT</h5>
            <p>Graduate</p>
          </span>
        </div>

        <div className="info-divider"></div>

         {/* -- project complete --> */}
        <div className="info-content flex">
          <div className="icon-container flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>5 + Projects</h5>
            <p>Completed</p>
          </span>
        </div>

        <div className="info-divider"></div>

         {/* -- year experiences --> */}
        <div className="info-content flex">
          <div className="icon-container flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <span>
            <h5>1 + Year</h5>
            <p>Job Experience</p>
          </span>
        </div>
      </div>
    </div>
  </section>
  </Layout>
    
  )
}
