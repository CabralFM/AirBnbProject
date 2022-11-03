
import "./App.css";
import Search from "./components/paginas/search/Search";
import Navegacao from "./components/Layout/Navegacao";
import Home from "./components/paginas/Home/Home";
import Favoritos from "./components/paginas/favoritos/Favoritos";
import Detalhes from "./components/paginas/Detalhes/Detalhes";
import {ProviderFavoritos} from "./components/paginas/favoritos/FavoritosContext";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

function App() {
  return<ProviderFavoritos><BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route  path="/detalhes/:id_casa" component={Detalhes}/>
        <Redirect to={"/search"}/>
      </Switch>
      <Navegacao/>
    </div>
  </BrowserRouter>;
  </ProviderFavoritos>
}

export default App;
