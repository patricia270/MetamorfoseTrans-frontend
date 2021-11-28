import Header from "../styles/stylesNavbar";
import { MdArrowBackIosNew, MdAdd } from "react-icons/md";

function Navbar({ children }) {
    return (
        <Header>
            <MdArrowBackIosNew size="25" />
            <h1>{children}</h1>
            <MdAdd size="30" />
        </Header>
    );
}

export default Navbar;
