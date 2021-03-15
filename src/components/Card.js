import React from 'react';
import "./Card.css";
import pokemon1 from "../images/cutest-5.jpeg";

const Card = () => {
    return (<section>
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <img src={pokemon1} alt="pokemon" />
                </div>
                <div className="card-content">
                    <div>
                        <h2>title image1</h2>
                        <p>Pokémon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo,</p>
                    </div>
                </div>
            </div>
        </div>
    </ section>
    );
}

export default Card;
