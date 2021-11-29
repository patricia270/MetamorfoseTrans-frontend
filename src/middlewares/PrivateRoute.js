import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../contexts/userContext";

export default function PrivateRoute({ element: Element, path, ...rest }) {
    const { user } = useContext(UserContext);

    return (
        <Route exact path={path}>
            {user?.token ? <Element {...rest} /> : <Redirect to="/" />}
        </Route>
    );
}
