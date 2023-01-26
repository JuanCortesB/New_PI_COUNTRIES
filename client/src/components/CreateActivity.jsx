import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {postActivities, getAllCountries} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/activity.module.css"


const CreateActivity = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries= useSelector(state =>state.addCountries)
    const [errors, setErrors]= useState({})

    const[input, setInput] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries: []
    })

    useEffect(() =>{
        dispatch(getAllCountries())
    },[dispatch])
    //cada vez que modifique los inputs toma el evento input y por name en cada etiqueta, lo cambia por el value introducido
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
            
        })
        console.log(input)
        setErrors(validacion({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }
/// para el elemento submit 
    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postActivities(input))
        alert("Actividad Creada!")
        setInput({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries: []

        })
        ///uso el useHistory para cuando se cree la actividad me devuelva al home
        history.push("/home")
    }

    function validacion(input){
        let errors ={}
        if(!input.name)
        errors.name = "Debe ingresar un nombre"
        else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(input.name)){
            errors.name = "Debe ingresar un nombre valido"
        }
        return errors
    }
    return(
        <div className={styles.container}>
            
            <Link to="/home">
             <button className={styles.buttonHome}>Home</button>
             </Link>
            

            <h4>Crea tu actividad deportiva</h4>
            <form onSubmit={e =>handleSubmit(e)} className={styles.form}>
                <div>
                    <label>Nombre: </label>

                    <input className={styles.inputs} placeholder="escribe tu actividad..."
                     type="text" value={input.name} 
                     name="name" 
                     onChange={(e) => handleChange(e)}/>
                     
                     {errors.name && ( <p className="error">{errors.name}</p>)}

                </div>
                <div>
                    <label>Dificultad: </label>
                    <select className={styles.inputs} name="difficulty" onChange={(e)=>handleChange(e)}>
                    <option>Select difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                    </select>
                    {/* <input type="text" value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)}/> */}
                </div>
                <div>
                    <label>Duracion: </label>
                    <input className={styles.inputs} type="text" value={input.duration} name="duration" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Temporada:</label>
                    <select className={styles.inputs} name="season" onChange={(e) => handleChange(e)}>
                    <option>Elije temporada</option>
                    <option value="primavera">Primavera</option>
                    <option value="otoño">Otoño</option>
                    <option value="invierno">Invierno</option>
                    <option value="verano">Vernao</option>
                    {/* <input type="text" value={input.season} /> */}
                    </select>
                </div>
             
                    <label>Country:</label>
                    <select className={styles.inputs} onChange={(e) => handleSelect(e)}>
                        {countries.map( (c) =>(
                            <option value={c.name}>{c.name}</option>
                        ))}
                    </select>
                    <ul><li>{input.countries.map(e => e + " ,")}</li></ul>
                <div className={styles.createButton}>

                <button  type="submit">Crear Actividad</button>
                </div>
            </form>
        </div>
    

    )
}

export default CreateActivity