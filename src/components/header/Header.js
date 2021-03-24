import React from 'react';
import "./Header.css";
import SearchAppBar from "../header/SearchAppBar";
import fight from "../images/fight.png";
import Zoom from 'react-reveal/Zoom';

const Header = () => {
    return (
        <div className="header">
            <div >

                <Zoom top duration="2000"><img src={fight} alt="fight" /></Zoom>
                <br />

            </div>
            <div>
                <SearchAppBar />
                <br /><br />
            </div>
        </div>
    );
}

export default Header;
