import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const CardInfoDoctor = styled.div`
    width: 90.4vw;
    height: 144px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 30px 0 0 16px;
    display: flex;
    position: relative;
    margin-bottom: 34px;
    img {
        width: 96px;
        height: 84px;
        border-radius: 10px;
        margin-right: 10px;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        color: #464A4D;
        max-width: 55vw;
    }
    span {
        font-weight: bold;
    }
    div {

    }
`;

const Stars = styled.div`
    margin-top: 10px;
`;

const SearchBox = styled.input`
    margin: 103px 0 29px 0;
    min-height: 57px;
    border-radius: 6px;
    text-align: center;
    ::placeholder {
        font-size: 16px;
    }

`;

const Order = styled.div`
    color: #FFFFFF;
    align-self: flex-start;
    padding-left: 6vw;
    margin-bottom: 29px;
`;

const IconSearch = styled(IoSearchSharp)`
    width: 25px;
    height: 25px;
    color: #C4C4C4;
    position: absolute;
    left: 10vw;
    top: 18vh;
`;

const IconFilter = styled(FiFilter)`
    width: 25px;
    height: 25px;
    color: #979292;
    position: absolute;
    right: 10vw;
    top: 18vh;
`;

const IconHearth = styled(AiOutlineHeart)`
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 13px;
    right: 13px;
`;

export {
    CardInfoDoctor,
    Stars,
    SearchBox,
    Order,
    IconSearch,
    IconFilter,
    IconHearth,
}