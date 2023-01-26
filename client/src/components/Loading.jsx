// import React, { Fragment } from "react";
import earth2 from "../video/earth2.gif";
import styles from "../Styles/loading.module.css"

const Loading = () =>{ 
    return(
        <div className={styles.loading}>
            <img src={earth2}  alt=""/>
            <h2>Loading...</h2>
        </div>

            )
        };
        
        export default Loading
   