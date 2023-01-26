import React  from "react";
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import  {getAllCountries, filterByCont, orderByName,orderByPopulation}  from "../redux/actions"
import CardCountries from "./CardCountries";
import Paginado from "./Paginado";

import NavBar from "./NavBar";
import styles from "../Styles/home.module.css"
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Home = () =>{
    
    const dispatch = useDispatch()
    
    const estadoCountries= useSelector(state =>state.addCountries)//traigo todos mis paises 
    const[orderName,setOrderName]= useState("") 
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage]= useState(10)
    const indexOfLastCountires = currentPage * countriesPerPage
    const indexOfFirstCountries = indexOfLastCountires - countriesPerPage 
    //paises en la página actual , me traigo el arreglo del estado con todos los paises.
    const currentCountries = estadoCountries.slice(indexOfFirstCountries, indexOfLastCountires)
    console.log(currentCountries)

    const paginado = (pageNumber) =>{

        setCurrentPage(pageNumber)

    }


    useEffect( ()=>{
        dispatch(getAllCountries())

    },[dispatch])

    const handleClick = (e) =>{///reset de countries
        e.preventDefault()
        dispatch(getAllCountries());

    }

    function handleFilterCont(e){
        dispatch(filterByCont(e.target.value))
    }
    function handleOrderName(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        ///tomo el estado local vacio y le seteo el value que yo elija
        setOrderName(e.target.value)
    }
    function handleOrderPopulation(e){
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        // setCurrentPage(1)
        ///tomo el estado local vacio y le seteo el value que yo elija
        setOrderName(e.target.value)
    }
    return(
        
        
        <div >
       
        <container>
        <NavBar
            orderPopulation={handleOrderPopulation}
            orderName={handleOrderName}
            orderCont={handleFilterCont}
        />

        </container>
       
        <button  onClick={e => {handleClick(e)}}>Recargar Paises</button>
             

        <Paginado
        countriesPerPage={countriesPerPage}
        estadoCountries={estadoCountries.length}
        paginado={paginado}/>

       
            <div  className={styles.main}>
                {currentCountries.length > 0 ? currentCountries.map(c =>  
                    <Link key={c.id} to={`countries/${c.id}`}>

                    <CardCountries key={c.id} name={c.name} continent={c.continent} flag={c.flag}/>
                    </Link>
                
                ):<h2> <Loading/></h2>}
                </div>

       

                </div>
    


    )


    }
export default Home