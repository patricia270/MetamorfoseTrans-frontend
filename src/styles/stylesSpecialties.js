import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const CardInfoDoctor = styled.div`
    width: 90.4vw;
    height: 144px;
    border-radius: 10px;
    background-color: #ffffff;
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
        color: #464a4d;
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
    margin: 10px 0 29px 0;
    min-height: 57px;
    border-radius: 6px;
    text-align: center;
    ::placeholder {
        font-size: 16px;
    }
`;

const Order = styled.div`
    color: #ffffff;
    align-self: flex-start;
    padding-left: 6vw;
    margin-bottom: 29px;
`;

const IconSearch = styled(IoSearchSharp)`
    width: 25px;
    height: 25px;
    color: #c4c4c4;
    position: absolute;
    left: 15px;
    top: calc(50% - 25px);
`;

const IconFilter = styled(FiFilter)`
    width: 25px;
    height: 25px;
    color: #979292;
    position: absolute;
    right: 15px;
    top: calc(50% - 25px);
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
};
