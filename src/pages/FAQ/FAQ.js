import { useHistory } from "react-router";
import styled from "styled-components";
import { trendingTopics, articles } from "../../mock/mockFAQ";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
function FAQ() {
    const history = useHistory();
    return (
        <StyledPageContainer>
            <StyledHeaderBackground />
            <Navbar transparent />
            <StyledPageTitle>
                <strong>Como podemos te ajudar?</strong>
            </StyledPageTitle>
            <SearchInput />
            <StyledTrendingTopics>
                {trendingTopics.map((topic, index) => (
                    <button key={index}>{topic}</button>
                ))}
            </StyledTrendingTopics>
            <StyledArticlesContainer>
                {articles.map((article, index) => (
                    <button
                        key={index}
                        onClick={() => history.push("/article/" + article.id)}
                    >
                        {article.title}
                    </button>
                ))}
            </StyledArticlesContainer>
        </StyledPageContainer>
    );
}

export default FAQ;
const StyledArticlesContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 48px;
    button {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        width: 100%;
        color: #000000;
        padding: 20px 0;
        background: none;
        border: none;
        border-bottom: 1px solid #c4c4c4;
    }
`;
const StyledTrendingTopics = styled.section`
    margin-top: 70px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    button {
        margin-bottom: 8px;
        height: 25px;
        background: #b35efa;
        border: none;
        border-radius: 30px;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        color: #ffffff;
    }
`;
const StyledPageTitle = styled.h1`
    font-size: 36px;
    letter-spacing: 0.25px;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    width: 90%;
    margin-top: 90px;
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
