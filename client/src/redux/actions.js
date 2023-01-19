import axios from "axios"

export const GET_ALL_COUNTRIES= "GET_ALL_COUNTRIES"
export const GET_COUNTRIESNAME= "GET_COUNTRIESNAME"
export const GET_COUNTRIESID= "GET_COUNTRIESID"
export const ERROR = "ERROR"


///actions es un objeto que envia al reducer, se envía con un dispach , este se hace con un useEfect con una funcion

export const getAllCountries = () =>{
    return async function (dispatch){
        try {
            
            const serverAll= await axios.get("http://localhost:3001/")
            const allCountries= serverAll.data
            console.log(allCountries)
             dispatch({
                 type:"GET_ALL_COUNTRIES",
                 payload: allCountries
               })
        } catch (error) {
            dispatch({
                type: "ERROR",
                payload: error
            })
        }
    }
}
export const getNameCountries = (name) =>{
    return async function (dispatch){
        try{
            const serverNames= await axios.get(`http://localhost:3001/countries?name=${name}`)
            const allNames = serverNames.data
            console.log(allNames)
            dispatch({
                type: "GET_ALL_NAMES",  
                payload: allNames
            })
        }
        catch (error) {
            dispatch({
                type: "ERROR",
                payload: error
            })
        }
        }
    }

export function postActivities (payload){
    return async function(dispatch){

        const serverActivities = await axios.post("http://localhost:3001/activities", payload)
        const activities = serverActivities.data
        console.log(activities)
        return activities
       

    }  
    
}
export function filterByCont(payload){
    console.log(payload)
    return{
        type: "FILTER_BY_CONT",
        payload
    }
}

////ORDENAR NOMBRE

export function orderByName(payload){
    return{

        type:"ORDER_NAME",
        payload
    }
}

export function orderByPopulation(payload){
    return{

        type:"ORDER_POPULATION",
        payload
    }
}
// FILTRADO DE ACTIVIDADES
export function filterActivities(payload){
    return{

        type: "FILTER_BY_ACTIVITIES",
        payload
    }
}


// export const getCountriesByName = async (name) =>{
//     return  async function (dispatch){
//         try {
            
//             const serverName = await axios.get(`http://localhost:3001/${name}`)
//             const countriesName = serverName.data
//             dispatch({
//                 type: GET_COUNTRIESNAME,
//                 payload: countriesName
//             })
//         } catch (error) {
//             dispatch({
//                 type: ERROR,
//                 payload: error
//             })
//         }
//     }
// }
// export const getCountriesById = async (id) =>{
//     return  async function (dispatch){
//         try {
            
//             const serverId = await axios.get(`http://localhost:3001/${id}`)
//             const countriesID = serverId.data
//             dispatch({
//                 type: GET_COUNTRIESID,
//                 payload: countriesID
//             })
//         } catch (error) {
//             dispatch({
//                 type: ERROR,
//                 payload: error
//             })
//         }
//     }
// }