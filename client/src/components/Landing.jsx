import React from "react";
import { Link } from "react-router-dom";
import banderas from "../video/banderas.mp4"
import styles from "../Styles/landing.module.css"

  const Landing = () =>{
    return(
        <div className={styles.container}>
        <div className={styles.overlay}></div>

             <video src={banderas}  autoPlay muted loop />
       <div className={styles.content}>
          
        
        <h1>Welcome</h1>
        <p>Travel around the world</p>
            
            <Link to="/home">
               <button>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               ENTER</button> 
            
            </Link> 
       </div>
        </div>


    )


}
export default Landing
