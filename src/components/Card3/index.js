import React from "react";
import styles from "./styles.module.css";



function myFunction() {return (document.getElementById("demo").innerHTML = "Item added to bag!")}
function myFunction2() {return ( document.getElementById("demo2").style.color = "red")}
function myFunction3() {return ( document.getElementById("demo2").style.color = "black")}

const AddToBag = () => (
    <a
     href="/"
     onClick={event => {
       event.preventDefault();
       myFunction();
     }}className = {styles.button}
   >
     <b>ADD TO BAG </b>
   </a>
 );

 const Heart = () => (
    <a href="/" 
       onClick={event => {
        event.preventDefault();
        myFunction2();
      }}
      onDoubleClick={event => {
        event.preventDefault();
        myFunction3();}}
      className = {styles.Heart}
    >
     <span id="demo2" style={{fontSize: '270%',fontWidth:'300%',color: 'black'}}>&hearts;</span>
   </a>
 );

export default({productName, productPrice, source}) => (
   
    <div className = { styles.Card }>

            <div className={styles.upperRow}>
                        <div className= {styles.left}>
                                <img className = { styles.Photo } src={source} alt='' />
                         </div>     
                        
                            <div className= {styles.right}>
                            
                                <div>
                                    <ul class="prva" style={{display: 'inline-block', textDecoration: 'none',width: '60%'}}>
                                    <li style={{display: 'inline-block', float: 'left',textDecoration: 'none'}}>{productName}<br></br><b>{productPrice}</b></li>
                                    </ul>
                                </div>
                                

                                    <select id="size">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    </select>

                                 <div>
                                            <ul style={{display:'inline-block', textDecoration: 'none',width: '35%'}}>
                                                <li style={{display:'inline-block'}}><AddToBag />&nbsp; &nbsp;</li>
                                                <li style={{display:'inline-block',float: 'right', marginTop: '15px'}}><Heart /></li>
                                            </ul>               
                                 </div>         
                                
                            </div>
              </div>
     
          <div className={styles.lowerRow}>
                <h3><u>Product details</u></h3>
                   <ul>
                            <li>Material: 64% Acrylic, 16% Polyamide, 13% Polyester, 4% Wool, 3% Elastane</li>
                            <li>Roll-neck</li>
                            <li>Colour : Grey</li>
                    </ul> 
           </div>
             
 </div>

);