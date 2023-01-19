//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios")


function preCarga(){
  
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
    
    Country.bulkCreate(result)
  })
};

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await preCarga()
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
