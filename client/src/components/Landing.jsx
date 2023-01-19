import React from "react";
import { Link } from "react-router-dom";

  const Landing = () =>{
    return(
        <div>
        
            <h3>Soy la LandingPage</h3>
            <Link to="/home">
               <button>ENTER</button> 
            
            </Link>
        </div>


    )


}
export default Landing
