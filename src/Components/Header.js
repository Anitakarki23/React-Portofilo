import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <label for="darkMode">
    <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
  </label>

   {/* -- header --> */}
  <header class="flex primary-header">
    <div class="logo flex">
      <div>
        <h1>Anita</h1>
      </div>
      <div>
        <h1 class="line">Web Developer</h1>
      </div>
    </div>

    <div class="right">
      <input type="checkbox" id="check" />
      <label htmlFor="check" class="menu-icon">
        <i class="fa-solid fa-bars text-danger"></i>
      </label>

      <ul class="navigation flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/skills">Skills</Link>
        </li>
        <li>
        <Link to="/projects">Projects</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/footer">Footer</Link>  
        </li>
      </ul>
    </div>
  </header></>
  )
}
