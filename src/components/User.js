import React from 'react';
import "./User.css";
import pokemon2 from "../images/cutest-11.png";

const User = () => {
    return (<fragment>
        <div className="user-container">
            <div className="user-card">
                <div className="user-image">
                    <img src={pokemon2} alt="pokemon" />
                </div>
                <div className="username">
                    <input type="text" />
                </div>
                <div className="card-content">
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </fragment>
    );
}

export default User;
