import styled from "styled-components";

const Title = styled.div`
    font-weight: 700;
    margin-bottom: 7px;
`;

const InfoList = styled.ul`
    width: 100%;
    padding: 5px 0;
    flex-grow: 1;
    line-height: 18px;

    li {
        padding: 10px 0;
        margin: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
        line-height: 20px;
    }
`;

export { Title, InfoList };
