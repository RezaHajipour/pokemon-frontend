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
        <Route path="/">
          <Pokemon />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>

    </div>




  );
}

export default App;
