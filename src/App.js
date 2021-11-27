import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
