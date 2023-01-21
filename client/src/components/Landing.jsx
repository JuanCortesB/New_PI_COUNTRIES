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
          
        
        <h1 className={styles.h1landing}>Welcome</h1>
        <pc className={styles.planding}>Travel around the world</pc>
            
            <Link to="/home">
               <button className={styles.landingbutton}>
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
