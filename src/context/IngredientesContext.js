import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const IngredientesContext = createContext();

const IngredientesProvider = (props) => {

    const [ ingredientes, guardarIngredientes ] = useState([]);

    useEffect(() => {
        
        const obtenerIngredientes = async()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
            const ingredientes = await axios(url);
            //console.log(resultado);
            guardarIngredientes(ingredientes.data.drinks);
        }
        obtenerIngredientes();
    }, [])

    return ( 
        <IngredientesContext.Provider
            value={{
                ingredientes
            }}
        >
            {props.children}
        </IngredientesContext.Provider>
     );
}
 
export default IngredientesProvider;