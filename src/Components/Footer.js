import React from 'react'
import { Layout } from './Layout'

export const Footer = () => {
  return (
    <>
    <footer>
    <div class="footer-container flex">
      <div class="flex links">
        <h3>Links</h3>
        <ul class="flex">
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/skill">Skills</Link>
          </li>
          <li>
          <Link to="/project">project</Link>
          </li>
          <li>
          <Link to="/about">About me</Link>
          </li>
        </ul>
      </div>
      <div class="flex socials">
        <h3>Socials</h3>
        <ul class="flex">
          <li><a href="" target='_blank'>LinkedIn</a></li>
          <li><a href="">Githhub</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">&copy; All right reserved.</div>
  </footer></>
  )
}
