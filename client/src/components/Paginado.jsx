import React from "react";
// import styles from './Paginado.module.css'
import styles from './Paginado.module.css'



export default function Paginado ({countriesPerPage,estadoCountries, paginado}) {

    
    
    const pageNumbers = []

    
    
    ///redondea todos los personajes sobre la cantidad de personajes que quiero por pagina
    for(let i = 1; i <= Math.ceil(estadoCountries/countriesPerPage); i++){
        pageNumbers.push(i)
        
    }


    return (
        <nav className={styles.numBar}>
          <div className={styles.numContainer}>
            {pageNumbers &&
              pageNumbers.map((num) => {
                return (
                  <a
                    key={num}
                    className={styles.number}
                    onClick={() => paginado(num)}
                  href>
                    {num}
                  </a>
                )
              })}
          </div>
        </nav>
      )
    }
//     return(
//         <nav>

//             <ul className={styles.paginado}>
//                 {pageNumbers && 
//                 pageNumbers.map(num =>(
//                     <li className="num" key={num} >                 
//                     <a onClick = { () => paginado(num)  } href> {num}</a>
//                     </li>

                
//             ))}
//             </ul>
            
//         </nav>



//     )
// };

// import React from 'react'
// import styles from './Paginado.module.css'

// export  const Paginado = ({ countriesPerPage,estadoCountries, paginado }) => {

//     const pageNumbers = []
//         for (let i = 1; i <= Math.ceil(estadoCountries/countriesPerPage); i++){ //Redondear todos los paies entre la cantidad de paises que quiero por pagina
//             pageNumbers.push(i)
//         }
//     return (
//         <nav>
//             <ul className={styles.paginado} >
//                 {
//                     pageNumbers && pageNumbers.map(number => (
//                         <li className='number' key={number}>
//                             <a onClick={()=> paginado(number)}  >{number}</a>
//                         </li>
//                     ))}
//             </ul>
//         </nav>
//     )
// }