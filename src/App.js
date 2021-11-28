import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home";

function App() {
  const userData = JSON.parse(localStorage.getItem("MetamorfoseTrans"));
  const [user, setUser] = useState(userData);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
        </Switch>
      <GlobalStyle />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
