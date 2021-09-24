import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/register" component= {Register} />
        <Route exact path="/login" component= {Login} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;