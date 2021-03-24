import React, { useState, useEffect, Fragment } from 'react';
import Card from "../card/Card";
import { getApiData } from "../../Api";
import "./Pokemon.css";
import 'fontsource-roboto';
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Hero from "../hero/Hero";



const Pokemon = () => {
    const [allpokemon, setAllpokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")

    // const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
    useEffect(() => {
        const fetchAllPokemons = () => {
            getApiData(currentPage).then(pokemons => pokemons.results.forEach((uniquePoke) => fetcEachPokemon(uniquePoke)))
        }
        fetchAllPokemons();
    }, []);

    const fetcEachPokemon = (onePokemon) => {
        getApiData(onePokemon.url).then(res => setAllpokemon(prevData => [...prevData, res]))
    }


    return (
        <>
            <Hero />
            <Header />
            <div className="container">
                <div className="main">
                    {allpokemon && allpokemon.map(pokemon => {
                        return (
                            <Fragment>
                                <Link to={`/fight/${pokemon.id}`} >
                                    <Card key={pokemon.name} {...pokemon} />
                                </Link>

                            </Fragment>
                        )

                    })}</div>
            </div>
        </>
    );
}

export default Pokemon;






