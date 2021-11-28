import styled from "styled-components";

const Header = styled.div`
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #ffffff;
    align-items: center;
    border-radius: 6px;
    position: fixed;
    top: 0;
    left: 0;
    h1 {
        font-size: 25px;
        font-weight: bold;
    }
`;

export default Header;
