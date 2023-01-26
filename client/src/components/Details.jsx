import React , {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountriesById } from "../redux/actions"



const Details = (props) =>{
    const dispatch = useDispatch()
    const id = props.match.params.id
    const cardDetails = useSelector((state) => state.detail)
    
    useEffect(() =>{
        dispatch(getCountriesById(id))
    },[dispatch, id])


    return(

        <div>
                <h1>{cardDetails.name}</h1>
        {/* cardDetails?
            <div>
                 <img src={cardDetails.flag} alt="img not found " width="200px" height="250px"/> 
                 <h3>{cardDetails.id}</h3>
                 <h3>{cardDetails.continent}</h3>
                 <h3>{cardDetails.capital}</h3>
                 <h3>{cardDetails.subregion}</h3>
                 <h3>{cardDetails.area}</h3>
                 <h3>{cardDetails.population}</h3>

            </div>: <p>Se estan cargando los detalles</p>
            {
                cardDetails.Activities&&cardDetails.Activities.length ? 
                cardDetails.Activities.map(e => {
                return (
                        <div>
                            <h4 >{e.name}</h4>
                            <p >Dificultad: {e.difficulty}</p>
                            <p >Duración: {e.duration} horas</p>
                            <p >Temporada: {e.season}</p>
                        </div>
                        
                    ) 
                 }) 
                 : <p>No existen actividades en este país</p> 
            } */}
        </div>
    )
    
}
export default Details