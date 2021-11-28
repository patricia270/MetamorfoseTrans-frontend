import styled from "styled-components";

const Header = styled.div`
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #FFFFFF;
    align-items: center;
    position: fixed;
    z-index: 1;

    h1 {
        font-size: 25px;
        font-weight: bold;
    }
`;

export default Header;