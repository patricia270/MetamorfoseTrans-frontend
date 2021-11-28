import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import styled from "styled-components";

export default function SearchInput(){
    return(
        <StyledSearchBox>
        <div>
          <SearchIcon />
        </div>
        <input placeholder="Pesquisar" type="text" />
      </StyledSearchBox>
    )
}
const StyledSearchBox = styled.div`
  width: 83.87vw;
  display: flex;
  margin-top: 32px;
  height: 57px;
  div {
    width: 20%;
    height: 100%;
    background:#fff;
    border-radius: 6px 0 0 6px;
    border: 1px solid #444444;
    border-right: none;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  input {
    width: 80%;
    height: 100%;
    border-radius: 0 6px 6px 0;
    border: 1px solid #444444;
    border-left: none;
    outline: 0;
  }
`;