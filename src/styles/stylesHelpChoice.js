import styled from "styled-components";
import { MyBox } from "./genericStyledComponents";

const GroupBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const MyContainer = styled(MyBox)`
    background-color: #FEFFFA;
`;
const ContainerMain = styled.div`
    background-color: #FEFFFA;
    width: 80%;
    margin: 0 auto;
    h1{
        font-weight: 700;
        font-size: 37px;
        color: #464A4D;
        margin: 20px 0px;
    }
    img{
        height: 60px;
        width: 60px;
    }
    @media(max-width: 700px){
        width: 95%;
        padding: 10px;
    }
`;
const BoxOptionHelp = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125px;
    border-radius: 10px;
    border: 1px solid #979292;
    background-color: #FFFFFF;
    margin: 10px auto;
    h2{
        position: absolute !important;
        top: 50%;
        left: 56%;
        transform: translate(-50%, -50%);
        font-weight: 700 !important;
        font-size: 18px !important;
        color: #979292 !important;
        margin: 0px !important;
    }
    img{
        position: absolute !important;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        height: 60px;
        width: 60px;
        
    }

    @media(max-width: 497px) {
        justify-content: space-between;
        img{
            left: 17%;
            margin-left: 1rem;
            height: 60px;
            width: 60px;
         
        }
        h2{
            left: 70%;
            margin-left: 1rem;
            font-size: 14px !important;
        }
    }
`;

export {
    GroupBox,
    MyContainer,
    ContainerMain,
    BoxOptionHelp,
}