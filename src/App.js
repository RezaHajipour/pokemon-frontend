import './App.css';
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonId from "./components/pokemonId/PokemonId";
import PokemonInfo from "./components/pokemonInfo/PokemonInfo";
import 'fontsource-roboto';
import Header from "./components/header/Header";
import FightPoke from './components/fightpoke/FightPoke'


function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Switch>
        <Route path="/pokemon/:id/:info">
          <PokemonInfo />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonId />
        </Route>
        <Route path="/card" component={Card} />

        {/* we change this route to anther route and it's working with putting the compoent inside  */}
        {/* <Route path="/">
          <Pokemon />
        </Route> */}
        <Route exact path="/" component={Pokemon} />
        <Route exact path="/fighting" component={FightPoke} />

      </Switch>

    </div>




  );
}

export default App;
