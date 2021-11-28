import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Specialties from "./pages/Specialties";
import HelpChoice from "./pages/HelpChoice";
import FAQ from "./pages/FAQ/FAQ";
import Article from "./pages/Article";

function App() {
  const userData = JSON.parse(localStorage.getItem("MetamorfoseTrans"));
  const [user, setUser] = useState(userData);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/help-choice" exact>
            <HelpChoice />
          </Route>
          <Route path="/specialties" exact>
            <Specialties />
          </Route>
          <Route path="/questions" exact>
            <FAQ />
          </Route>
          <Route path="/article/:articleId" exact>
            <Article />
          </Route>
        </Switch>
        <GlobalStyle />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
