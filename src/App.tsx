import "./style.css";
import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/home";
import HowToUse from "./pages/howToUse";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/how-to-use" exact component={HowToUse} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
