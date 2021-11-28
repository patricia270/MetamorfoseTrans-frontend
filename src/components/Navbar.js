import Header from "../styles/stylesNavbar";
import { MdArrowBackIosNew, MdAdd } from "react-icons/md";
import { useHistory } from "react-router-dom";

function Navbar({ children }) {
    const history = useHistory();

    return (
        <Header onClick={() => history.goBack()}>
            <MdArrowBackIosNew size="25" />
            <h1>{children}</h1>
            <MdAdd size="30" />
        </Header>
    );
}

export default Navbar;
