import React from "react";
import styles from "../Styles/navbar.module.css"
// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {getAllCountries} from "../redux/actions.js"
import { Link} from "react-router-dom";


function NavBar({orderPopulation, orderName, orderCont}){

    const dispatch= useDispatch()

    useEffect( ()=>{
        dispatch(getAllCountries())

    },[dispatch])

   
   
    return(
        
        
        <div className={styles.interior}>
       


        
        
    
        {/* ////Falta filtro por actividades */}
       
        
       <div className={styles.container} >
            <nav className={styles.nav1}>
                <ul>
                <li>
             <Link to="/activities"><button className={styles.createButton}>Crea tu actividad</button></Link>
               

                </li>
                    <li>
                    <select >
            <option value="allAct"> Filtrar actividades</option>
            <option value="createdAct"> Todas las actividades Creadas</option>
            <option value="postAct">Actividades existentes</option>
                   </select>
                    </li>
                    <li>
                    <select id="order" onChange={e => orderName(e)}>
            <option> Orden por nombre</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
                    </li>
                    <li>
                    <select id="population" onChange={e=>orderPopulation(e)}>
            <option> Orden por poblacion</option>
            <option value="aspobl">Ascendente</option>
            <option value="depobl">Descendente</option>
        </select>


                    </li>
                    <li>
                    <select id="continent" onChange={e => orderCont(e)}>
            <option value="all">Filtrado por continente</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antartica</option>
        </select>


                    </li>
                    <container className={styles.search}>

                    <li>

                    <SearchBar/></li>
                    </container>
                </ul>

            </nav>
            
        </div>
        </div>
        

    )
}

export default NavBar