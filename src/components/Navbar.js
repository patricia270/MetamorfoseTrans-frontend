import { useContext } from "react";
import UserContext from "../contexts/userContext";
import errors from "../services/errors";
import Header from "../styles/stylesNavbar";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";
import { signOut } from "../services/api";
import { useHistory } from "react-router-dom";

function Navbar({ children }) {
    const history = useHistory();
    const { user } = useContext(UserContext);

    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

    function logout() {
        signOut(config)
            .then(() => {
                localStorage.removeItem("MetamorfoseTrans");
                history.push('/');
            })
            .catch((error) => {
                errors(error);
            })
    }

    return (
        <Header >
            <MdArrowBackIosNew size="25" onClick={() => history.goBack()}/>
            <h1>{children}</h1>
            <MdLogout size="30" onClick={logout}/>
        </Header>
    );
}

export default Navbar;
