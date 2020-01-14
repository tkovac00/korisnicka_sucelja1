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
                             textDecoration: 'none',transform: 'translate(0, 50%)', fontSize: '1.5rem '}}><b>Name</b></Link>
     
      <ul className="navItem">
        <ListLink  to="/">Home</ListLink>
        <ListLink to="/Favourites/">Favourites</ListLink>
        <ListLink to="/Bag/">Bag</ListLink>
        <ListLink to="/Blog/">Blog</ListLink>
        <ListLink to="/LogIn/"><b>LOG IN</b></ListLink>
     </ul>
 
  </header>
)

export default Header