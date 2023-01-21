import React from "react"
import styles from "../Styles/cardStyles.module.css"



const CardCountries = ({name, continent,flag}) =>{
    return(

        <div className={styles.card}>
            <h3>{name}</h3>
            <img src={flag} alt="img not found " width="200px" height="250px"/> 
             <h5>{continent}</h5>

        </div>
    )

}

export default CardCountries