import React from 'react'

export const Contact = () => {
  return (
    <>
    <section class="section6 flex" id="contact">
    <h2 class="title">Get In Touch</h2>

    <div class="socials flex">
        <a href="https://www.linkedin.com/in/anita-kk/"><i class="fa-brands fa-linkedin"></i></a>
      
      {/* Put your own linked in account, open the achor tag and put the icon inside the anchor tag */}
      <i class="fa-brands fa-square-github"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
    </div>
    <h3 class="title">OR</h3>

    <div class="email-section flex">
      <div class="email flex">
        <a href="mailto:user@email.com">expalme@gmail.com</a>
        <div class="send">
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  </section>
</>
  )
}
