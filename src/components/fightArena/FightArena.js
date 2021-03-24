import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";
import Card from "../card/Card";
import "./fightArena.css";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import button1 from "../images/button1.png";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const FightArena = () => {
    // /fight/:selectPokemonID
    // const pokemonID = useParams().selectPokemonID
    const { selectPokemonID } = useParams()

    const [userPokemon, setUserPokemon] = useState()
    const [Random, setRandom] = useState();
    const [winner, setWinner] = useState()

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${selectPokemonID}`
        Axios.get(url).then((res) => {
            // console.log(res.data)
            setUserPokemon(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShowButton(true)
        }, 2000)
    }, [])


    useEffect(() => {
        // const RandomPokemon = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

        // const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (20 - 1 + 1)) + 1}`
        const url2 = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (20 - 1 + 1)) + 1
            }`
        Axios.get(url2).then((res) => {
            if (res.data.abilities.id !== selectPokemonID) {
                setRandom(res.data)
            } else {
                setRandom("")
            }

            // console.log(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])


    let handleFight = () => {
        if (userPokemon.base_experience > Random.base_experience) {
            setTimeout(() => setWinner(userPokemon), 1500)
        } else if (userPokemon.base_experience < Random.base_experience) {
            setTimeout(() => setWinner(Random), 1500)
        } else {
            setTimeout(() => setWinner(userPokemon), 1500)
        }

    }
    const handleResults = () => {

    }

    return (<>
        { !winner && <div className="arena-container">

            <div >{userPokemon && <Card {...userPokemon} />}</div>
            <div className="btn-section">
                <Button onClick={() => { window.location.reload(false) }} variant="contained" style={{ backgroundColor: '#2e3b55' }} href="#contained-buttons">Change Oponent</Button>
                &nbsp;
                {showButton && <Zoom left top duration="1000"><img className="button" src={button1} onClick={handleFight} /></Zoom>}</div>
            <div> <Zoom right duration="2000">{Random && <Card {...Random} />}</Zoom></div>
        </div >}
        { winner && <div className="winner">
            <Zoom>
                <h1>And the Winner is</h1>
            </Zoom>
            <Card {...winner} />
            <br />
            <div>
                <Button onClick={handleResults} variant="contained" style={{ backgroundColor: '#2e3b55' }} >Results</Button> &nbsp;&nbsp;
                <Button variant="contained" style={{ backgroundColor: '#2e3b55' }} href="/">Play Agian</Button>
            </div>


        </div>
        }
    </>
    );
}

export default FightArena;
