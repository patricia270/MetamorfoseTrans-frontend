import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState("")

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
