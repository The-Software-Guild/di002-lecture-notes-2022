// pokemon.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

// when to use different types of functions in a react app
// component function delcerations (named function)

// all other functions (arrow functions) => if you need to acccess the context of the "this" 

// this provides a really clear seperation of concern

function Pokemon() {
     const [pokemonList, setListWithPokemonFromApi] = useState([]);

     useEffect(() => {
          const getPokemon = async () => {
               await axios.get('https://pokeapi.co/api/v2/pokemon/')
                    .then(res => {
                         setListWithPokemonFromApi(res.data.results);
                         console.log(res.data);
                    })
                    .catch(err => console.log(err));
          }

          getPokemon();

     }, []);

     console.log(pokemonList) // two empty console.logs

     const listItems = pokemonList.map((poke, i) => {
          return <li key={i}>{poke.url}</li>
     })

     return (
          <ul>
               {listItems}
          </ul>
     )
};

export default Pokemon;