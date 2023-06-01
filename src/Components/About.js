import React from 'react'
import user from "../assets/imgs/user.png"
import { Layout } from './Layout'
 

export const About = () => {
  return (
    <Layout> 
    <section class="section5 flex" id="about">
    <h2 class="title">About Me</h2>
    <div class="about-container flex">
      <div class="left">
        <img src={user} alt="" />
      </div>
      <div class="right flex">
        <h2>Anita karki</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          expedita tenetur ipsa optio eveniet suscipit autem quia ratione,
          sint obcaecati saepe dolor dolores. Quo, officiis maiores at
          distinctio modi perferendis?
        </p>

        <p>Sydney, Australia</p>

        <div class="flex">
          <div class="tag">Intrests</div>
          <div class="flex">
            <span>coding</span>
            <span>Football</span>
            <span>Movies</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Layout>
    
  )
}
