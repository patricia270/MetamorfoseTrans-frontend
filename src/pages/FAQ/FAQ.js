import styled from "styled-components";
import Navbar from "./components/Navbar";
function FAQ() {
  return (
    <StyledPageContainer>
      <StyledHeaderBackground />
      <Navbar />
      <StyledPageTitle>
        <strong>Como podemos te ajudar?</strong>
      </StyledPageTitle>
      <StyledSearchBox placeholder="Pesquisar" type="text" />
      <StyledTrendingTopics>
        <button>Terapia</button>
        <button>Transição Hormonal</button>
      </StyledTrendingTopics>
      <StyledArticlesContainer>
        <button>Quero iniciar minha transição, e agora?</button>
      </StyledArticlesContainer>
    </StyledPageContainer>
  );
}

export default FAQ;
const StyledArticlesContainer = styled.main`
display:flex;
flex-direction:column;
width:90%;
margin-top:48px;
button{
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  height: 22px;
  width:100%;
  color: #000000;
  padding-bottom:32px;
  background:none;
  border:none;
  border-bottom: 1px solid #C4C4C4;
}
`
const StyledTrendingTopics = styled.section`
  margin-top: 70px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  button {
    height: 25px;
    background: #b35efa;
    border: none;
    border-radius: 30px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
  }
`;
const StyledSearchBox = styled.input`
  margin-top: 32px;
  width: 83.87vw;
  height: 57px;
  padding-left: 20px;
  border-radius: 6px;
  border: 1px solid #444444;
  outline: 0;
`;
const StyledPageTitle = styled.h1`
  font-size: 36px;
  letter-spacing: 0.25px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  width: 90%;
`;
const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeaderBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 465px;
  top: -180px;
  border-radius: 50%;
  background: linear-gradient(
    175.66deg,
    #f5a8b8 3.53%,
    #d07edd 52.13%,
    #b35efa 86.23%,
    #b35efa 167.23%
  );
  z-index: -1;
`;
