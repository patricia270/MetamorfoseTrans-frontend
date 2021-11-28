import { MdArrowBackIosNew, MdAdd } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Header from "../../../styles/stylesNavbar";

function Navbar({ children, transparent }) {
    const history = useHistory();

    return (
        <Header transparent onClick={() => history.goBack()}>
            <MdArrowBackIosNew size="25" />
            <h1>{children}</h1>
            <MdAdd size="30" />
        </Header>
    );
}

export default Navbar;
