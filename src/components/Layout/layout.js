import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import "./layout.css"

export default (props) => (
   <div>
     <div className="container">
           <Header/>
         {props.children}
      </div>
           <Footer className = "Footer"/>
         
  </div>
)
