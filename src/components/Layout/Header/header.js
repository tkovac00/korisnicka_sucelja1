import { Link } from "gatsby"
import React from "react"
import "./header.css"

const ListLink = props => (
    <li style={{ display: `inline-block`}}>
      <Link className="current" to={props.to} style={{ textDecoration: 'none'}} >{props.children}</Link>
    </li>
  )


const Header = () =>(
  <header>
  <Link to="/" style={{color: 'white', display: 'inline-block', float: 'left', marginLeft: '1.5rem',
                             textDecoration: 'none',transform: 'translate(0, 50%)', fontSize: '1.5rem '}}><b><i>t&m</i></b></Link>
    
      
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <ul className="menu">
        <ListLink to="/"><li>Home</li></ListLink>
        <ListLink to="/#products"><li>Products</li></ListLink>
        <ListLink to="/Favourites/"><li>Favourites</li></ListLink>
        <ListLink to="/Bag/"><li>Bag</li></ListLink>
        <ListLink to="/Blog/">Blog</ListLink>
        <ListLink to="/LogIn/"><b>LOG IN</b></ListLink>
     </ul> 
  </header>
)

export default Header