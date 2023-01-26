const { Router } = require('express');
const axios = require("axios");
const {Country, Activity} = require("../db")
const { Sequelize } = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//BORRAR //
// router.get("/", (req, res) =>{
//     res.send("hola") 
// });
////
router.get("/", async(req , res) =>{
  
    axios.get("https://restcountries.com/v3/all").then((response) => {
        let result = response.data.map(country => {
          const objCountries ={
              
            id: country.cca3,
            name: country.name.common,
            flag:country.flags[0],
            continent: String(country.continents[0]),
            capital: country.capital?country.capital[0]: "undefined",
            subregion:country.subregion,
            area:country.area,
            population: country.population,
          }
          return objCountries
        }) 
        
        
        res.send(result)
      
    })
});
//     ///https://restcountries.com/v3/all
//     // llamado asincronico a la API 
//      // recibir los datos y separarlos
//     //validar los datos
//     //agregar el objeto a mi base de datos (llanadi asincronico)
//     //resoibder que  se creo
router.get('/countries/:id', async (req, res) => {
    try {
        const id = req.params.id.toUpperCase();
        if(id){
        const countryById = await Country.findByPk(id, {
            include: Activity
            });
            res.send(countryById)
        }

    } catch (error) {
        res.status(404).send(error)
    }
})


router.post("/activities", async (req, res) => {
    try {
      const { name, difficulty, duration, season, countryIds } = req.body;
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      await newActivity.setCountries(countryIds);
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(404).send("Error, datos inválidos.");
    }
  });



  ///////////////

//   const data = async ()=>{
//     const array = await axios.get("https://restcountries.com/v3/all");
//     console.log("api: ", array.data)
//     return array.data.results;
// }



//   router.get('/', async (req, res) => {
//     try {
//         const name = req.query.name;
//         if (name) {
// //             let upperName = name.charAt(0).toUpperCase() + name.slice(1)
//             const countries = await Country.findAll({
//                 where: {
//                     name: { [Sequelize.Op.iLike]: `%${name}%`}
//                 },
//                 include: Activity  //include para hacer el join de las tablas
//                 })
//                 return countries ? res.json(countries) : res.sendStatus(404)
//             }
//         else {
//             const allCountries = await Country.findAll({
//                 include: Activity
//             })
//             return  res.json(allCountries);
//         }
//     } catch (error) {
//         res.send(error)
//     }
// })
  router.get("/countries", async(req,res) =>{
    try{
        const name = req.query.name;
        
        const newname = name.charAt(0).toUpperCase() + name.slice(1)
        const findCountry = await Country.findAll({
            where: {
                name: {     
                    [Sequelize.Op.like]: `%${newname}%`
                }
            }
        });
        
        if (findCountry.length > 0){
            res.json(findCountry)
        } else{
            res.json({ message: "Country doesn't exist"})
        };

    }catch(error){
        res.status(400).json(error)
    }
  });

module.exports = router;
