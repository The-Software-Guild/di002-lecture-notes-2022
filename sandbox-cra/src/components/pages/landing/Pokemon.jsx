// pokemon.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
     const [pokemon, setPokemon] = useState([]);

     useEffect(() => {
          const getPokemon = async () => {
               await axios.get('https://pokeapi.co/api/v2/pokemon/')
                    .then(res => {
                         setPokemon(res.data.results);
                         console.log(res.data);
                    })
                    .catch(err => console.log(err));
          }

          getPokemon();

     }, []);

     // console.log(pokemon)

     const listPokemon = pokemon.map((poke, index) => {
          return <li key={index}>{poke.name}</li>
     })

     return (
          <ul>
               {/* {listPokemon} */}
          </ul>
     )
};

export default Pokemon;