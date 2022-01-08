import './App.css';
import Home from "./components/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/notFound";
import PermissionDenied from "./components/permissionDenied";
import { isExpired } from "react-jwt";

function App() {
  return (
      <>
          <Switch>
            <Route path="/signin" component={Login}/>
            <Route path="/signup" component={Register}/>
              <Route path="/addMovie"
                     render={props => {
                         if (isExpired(localStorage.getItem('token'))) {
                             return <Redirect to="/denied" />;
                         }
                         return <AddMovie />;
                     }}
              />
            <Route path="/details/:id" component={MovieDetails}/>
            <Route path="/" exact component={Home}/>
            <Route path="/404" component={NotFound} />
            <Route path="/denied" component={PermissionDenied} />
            <Redirect to="/404"/>
          </Switch>
      </>
  );
}

export default App;
