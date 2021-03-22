import React, { useState, useEffect } from 'react';
import Card from "../card/Card";
import { getApiData } from "../../Api";
import "./Pokemon.css";
import 'fontsource-roboto';

const Pokemon = () => {
    const [allpokemon, setAllpokemon] = useState([]);
    const url = "https://pokeapi.co/api/v2/pokemon";
    useEffect(() => {
        const fetchAllPokemons = () => {

            getApiData(url).then(pokemons => pokemons.results.forEach((uniquePoke) => fetcEachPokemon(uniquePoke)))
        }
        fetchAllPokemons();
    }, []);

    const fetcEachPokemon = (onePokemon) => {
        getApiData(onePokemon.url).then(res => setAllpokemon(prevData => [...prevData, res]))
    }


    return (
        <div className="container">
            <div className="main">
                {allpokemon && allpokemon.map(pokemon => {

                    return <Card key={pokemon.name} {...pokemon} />



                })}</div>
        </div>
    );
}

export default Pokemon;






