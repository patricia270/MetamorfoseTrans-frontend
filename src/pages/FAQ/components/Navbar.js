import { MdArrowBackIosNew,MdAdd } from "react-icons/md";
import styled from "styled-components";

function Navbar() {
    return(
        <Header >
            <MdArrowBackIosNew size="25" color="white"/>
            <MdAdd size="30" color="white"/>
        </Header>
    );
}

const Header = styled.header`
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: none;
    align-items: center;
    border-radius: 6px;
    h1 {
        font-size: 25px;
        font-weight: bold;
    }
`;

export default Navbar;