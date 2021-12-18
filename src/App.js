import './App.css';
import TopBar from "./components/top-bar";
import Content from "./components/content.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
      <>
          <Switch>
            <Route path="/signin" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route path="/addMovie" component={AddMovie}/>
            <Route path="/details" component={MovieDetails}/>
            <Route path="/" exact component={Home}/>
          </Switch>
      </>
  );
}

export default App;
