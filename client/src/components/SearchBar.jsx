import React from "react";
import {useState} from "react"
import { useDispatch} from "react-redux";
import { getNameCountries } from "../redux/actions";


const SearchBar = () =>{
  const dispatch =useDispatch()
  const [name, setName] = useState("")

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }
//   const handleInputChange = (e) =>{
//     e.preventDefault()
//     setName(e.target.value)
//     console.log(name)
//   }
///name es mi estado local, será guardado lo que el usuario escriba por name
function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCountries(name))
}
//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     dispatch(getNameCountries(name))
//   }

  return(
    <div>
        <input type="text" 
        placeholder="Search..."
        onChange={(e)=> handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  )

}

export default SearchBar