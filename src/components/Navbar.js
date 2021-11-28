import styled from "styled-components";

function Navbar() {
    return(
        <Header>
        </Header>
    );
}

const Header = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #FFFFFF;
    align-items: center;
`;

export default Navbar;

