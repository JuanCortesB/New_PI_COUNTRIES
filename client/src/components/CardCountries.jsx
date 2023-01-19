import React from "react"



const CardCountries = ({name, continent,flag}) =>{
    return(

        <div>
            <h3>{name}</h3>
             <h5>{continent}</h5>
            <img src={flag} alt="img not found " width="200px" height="250px"/> 

        </div>
    )

}

export default CardCountries