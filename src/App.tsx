import "./style.css";
import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/home";
import HowToUse from "./pages/howToUse";
import Profile from "./pages/profile";
import axios from "axios";

const App: FC = () => {
  axios.defaults.baseURL = "http://localhost:5001/api";

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/how-to-use" exact component={HowToUse} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
