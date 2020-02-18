import React from "react"
import "./footer.css"

const Footer = () =>(
    
   <footer>
      <p><b>Contact: 0992618728</b></p>
      <p><b>Email: fashionlover@gmail.com</b></p>
      <hr style ={{border: '1px solid white', marginLeft: '3%', marginRight: '3%', opacity: '0.8'}}></hr>
      <div className = 'date'>
         © {new Date().getFullYear()}, tina&marta
            {` `}
      </div>            
  </footer>
  )
  export default Footer