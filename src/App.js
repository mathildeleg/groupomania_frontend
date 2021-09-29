import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/'><LandingPage /></Route>
          <Route exact path='/login'><Login /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;