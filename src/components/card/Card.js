import React from 'react';
import "./Card.css";
import 'fontsource-roboto';
import {useHistory} from "react-router-dom";

// import pokemon1 from "../../images/cutest-5.jpeg";

const Card = ({ name, sprites }) => {
    let history = useHistory();

    
    let clichPic = () =>{
        history.push('/fighting')
    }


    return (

        <div className="card" onclick={clichPic}>
            <div className="card-image">
                <img src={sprites.other.dream_world.front_default} alt="pokemon" />
            </div>
            <div className="card-content">
                <div>
                    <h2>{name}</h2>
                    <p>Pokémon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo,</p>
                </div>
            </div>
        </div>


    );
}

export default Card;
