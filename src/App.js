import './App.css';
import Card from "./components/card/Card";
import { Route, Switch } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonId from "./components/pokemonId/PokemonId";
import PokemonInfo from "./components/pokemonInfo/PokemonInfo";
import 'fontsource-roboto';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import React from 'react';
import FightArena from "./components/fightArena/FightArena";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/fight/:selectPokemonID">
          <FightArena />
        </Route>
        <Route path="/pokemon/:id/:info">
          <PokemonInfo />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonId />
        </Route>
        <Route path="/card" component={Card} />
        <Route path="/">
          <Pokemon />
        </Route>
      </Switch>
      <Footer />

    </div>




  );
}

export default App;
