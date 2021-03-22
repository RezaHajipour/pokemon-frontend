import React from 'react';
import "./Header.css";
import SearchAppBar from "../header/SearchAppBar";

const Header = () => {
    return (
        <div className="header">
            <div >
                <br />
                <h2>Choose your Favourite Pokemon</h2>
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
