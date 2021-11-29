import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Specialties from "./pages/Specialties";
import HelpChoice from "./pages/HelpChoice";
import Profile from "./pages/Profile/Profile";
import FAQ from "./pages/FAQ/FAQ";
import Article from "./pages/Article";
import ScrollToTop from "./hooks/ScrollToTop";
import PrivateRoute from "./middlewares/PrivateRoute";

function App() {
    const userData = JSON.parse(localStorage.getItem("MetamorfoseTrans"));
    const [user, setUser] = useState(userData);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <UserContext.Provider value={{ user, setUser }}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp />
                    </Route>
                    <PrivateRoute
                        path="/help-choice"
                        element={HelpChoice}
                        exact
                    />
                    <PrivateRoute
                        path="/specialties"
                        element={Specialties}
                        exact
                    />
                    <PrivateRoute path="/profile/:id" element={Profile} exact />

                    <PrivateRoute path="/questions" element={FAQ} exact />
                    <PrivateRoute
                        path="/article/:articleId"
                        element={Article}
                        exact
                    />
                </Switch>
                <GlobalStyle />
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
