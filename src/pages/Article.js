import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { articles } from "../mock/mockFAQ";
import { MdArrowBackIos } from "react-icons/md";

export default function Article() {
    const history = useHistory();
    const { articleId } = useParams();
    const { autor, date, title, text } = articles.find(
        (article) => article.id === Number(articleId)
    );
    return (
        <main>
            <StyledBackButton onClick={() => history.push("/questions")}>
                <MdArrowBackIos size="25" />
            </StyledBackButton>
            <StyledTitle>
                <strong>{title}</strong>
            </StyledTitle>
            <StyledArticle>
                <div>
                    <time>{date}</time>
                    <h5>Por: {autor}</h5>
                </div>
                <p>{text}</p>
            </StyledArticle>
        </main>
    );
}

const StyledTitle = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    margin: 80px auto 16px auto;
    text-align: center;
`;
const StyledArticle = styled.article`
    width: 90%;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.25px;
    color: #464a4d;
    div {
        margin-bottom: 24px;
    }
`;
const StyledBackButton = styled.button`
    position: absolute;
    top: 32px;
    left: 32px;
    background: none;
    border: none;
`;
