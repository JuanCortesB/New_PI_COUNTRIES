// import {GET_ALL_COUNTRIES} from "./actions"
// import {GET_COUNTRIESNAME} from "./actions"
// import {GET_COUNTRIESID} from "./actions"
// import {ERROR} from "./actions"



///el reducer tiene un estado inicial


const initialState = {
    addCountries:[],
    allCountries: [],
    activities:[]
    // countryName:[],
    // countryId:[],
    // error:{}
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case "GET_ALL_COUNTRIES":
            return{
                ...state,
                addCountries: action.payload,
                allCountries: action.payload/// essta es una copia del estado completo, para tener a la mano lo que necesite en los filtros.
///////////////REVISAR FILTER DE CONTINENTES//////////
            }
        case "FILTER_BY_CONT":
            const allCountries = state.allCountries
            console.log(allCountries)
            const statusFiltered = action.payload === "all"? allCountries: allCountries.filter(e => e.continent === action.payload)
            console.log(statusFiltered)
            
            return{
                ...state,
                addCountries:  statusFiltered
            }

        case "ORDER_NAME":

            // const arrOrderName = action.payload === 'asc'
            // ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
            // : state.allCountries.sort((a, b) => b.name.localeCompare(a.name))
            
            const arrOrderName =
            action.payload === "asc"? state.addCountries.sort((a,b) =>{
                if(a.name > b.name)return 1
                if(a.name < b.name)return -1
                return 0
            }): state.allCountries.sort((a,b)=>{
                if(a.name > b.name)return -1
                if(a.name < b.name)return 1
                return 0
            })
            return{
                ...state,
                addCountries: arrOrderName
                
            }
            case "ORDER_POPULATION":

                // const arrOrderName = action.payload === 'asc'
                // ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
                // : state.allCountries.sort((a, b) => b.name.localeCompare(a.name))
                
                const arrOrderPopulation =
                action.payload === "aspobl"? 
                    state.addCountries.sort((a,b) =>  a.population - b.population):
                    state.addCountries.sort((a,b) =>  b.population - a.population)
                   
                
                return{
                    ...state,
                    addCountries: arrOrderPopulation
                    
                }
            case "GET_ALL_NAMES":

                return{
                    ...state,
                    addCountries: action.payload
                }
            //TIENE QUE ESTAR EN EL REDUCER ASI SE HAGA LA RUTA EN OTRO LADO
            case "POST_ACTIVITIES":
                return{
                    ...state,
                    activities: action.payload
                }


            // case "FILTER_BY_ACTIVITIES":
            //     const allCountAct = state.allCountries === "createdAct"? allCountries.filter
            //     const filterAct= action.payload 

            //     const filtered = action.payload === 'All'  ? state.allCountries
            //       : state.allCountries.filter(
            //           (c) =>
            //             c.activities &&
            //             c.activities.filter((act) => act.season === action.payload)
            //               .length
            //         )
            // return{
            //     ...state,
            // }
            case "ERROR":
                return{
                    ...state,
                    error: action.payload
                }
            
            default:
                return {...state}
        }
    
    }
    
    export default rootReducer
        // case "GET_COUNTRIESNAME":
        //     return{
        //         ...state,
        //         countryName: action.payload

        //     }
        // case "GET_COUNTRIESID":
        //     return{
        //         ...state,
        //         countryId: action.payload

        //     }
