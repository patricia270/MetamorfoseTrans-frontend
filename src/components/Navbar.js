import Header from "../styles/stylesNavbar";
import { MdArrowBackIosNew, MdAdd } from "react-icons/md";

function Navbar() {
    return(
        <Header>
            <MdArrowBackIosNew size="25" />
            <h1>Especialistas</h1>
            <MdAdd size="30"/>
        </Header>
    );
}

export default Navbar;

