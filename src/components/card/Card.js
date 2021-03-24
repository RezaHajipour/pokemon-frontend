import React from 'react';
import "./Card.css";
import 'fontsource-roboto';
// import pokemon1 from "../../images/cutest-5.jpeg";

const Card = ({ name, sprites, types, stats }) => {
    return (

        <div className="card">
            <div className="card-image">
                <img src={sprites.other.dream_world.front_default} alt="pokemon" />
            </div>
            <div className="card-content">
                <div>
                    <h2 className="name">{name}</h2>
                    {/* <p></p> */}
                    <h3 className="type">Type</h3>
                    <ul>
                        {types.map(el => {
                            {/* console.log({ el }) */ }
                            return <li key={Math.random()}>{el.type.name}</li>
                        })}
                    </ul>
                    <h3 className="statistic">Statistics</h3>
                    <ul>
                        {stats
                            .filter(el => {
                                return el.stat.name === "hp" || el.stat.name === "defense" || el.stat.name === "attack"
                            })
                            .map(el => {
                                {/* console.log({ el }) */ }
                                return <li key={Math.random()}>{`${el.stat.name}: ${el.base_stat}`}</li>
                            })}
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Card;
