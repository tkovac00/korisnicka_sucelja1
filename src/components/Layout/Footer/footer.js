import React from "react"
import "./footer.css"

const Footer = () =>(
    
   <footer>
      
      {/* <hr style ={{border: '1px solid white', marginLeft: '3%', marginRight: '3%', opacity: '0.8'}}></hr> */}
      <div className = 'date'>
      <br></br>
         <div class="mail">Email:fashion@gmail.com</div> 
         © {new Date().getFullYear()}  tina&marta
            {` `}
      </div>            
  </footer>
  )
  export default Footer