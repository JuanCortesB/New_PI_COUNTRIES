import React from "react";
import styles from "../Styles/navbar.module.css"
// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar(){
   
    return(
        
        
        <div >
       <container >
            <nav className={styles.nav1}>
                <ul>
                    <li><SearchBar/></li>
                </ul>

            </nav>
            
        </container>
        </div>
        

    )
}

export default NavBar