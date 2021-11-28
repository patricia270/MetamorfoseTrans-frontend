import styled from "styled-components";
import { useState } from "react";

export default function InfoMenu() {
    const [renderedSession, setRenderedSession] = useState(<About />);
    const [chosenSession, setChosenSession] = useState("about");

    function chooseSession(component) {
        setChosenSession(component);

        if (component === "contact") {
            setRenderedSession(<Contact />);
            return;
        }

        if (component === "reviews") {
            setRenderedSession(<Reviews />);
            return;
        }

        setRenderedSession(<About />);
    }

    return (
        <MenuContainer>
            <InfoNavContainer>
                <SwitchInfoButton
                    showBorder={chosenSession === "about"}
                    onClick={() => chooseSession("about")}
                >
                    Sobre
                </SwitchInfoButton>
                <SwitchInfoButton
                    showBorder={chosenSession === "contact"}
                    onClick={() => chooseSession("contact")}
                >
                    Contato
                </SwitchInfoButton>
                <SwitchInfoButton
                    showBorder={chosenSession === "reviews"}
                    onClick={() => chooseSession("reviews")}
                >
                    Depoimentos
                </SwitchInfoButton>
            </InfoNavContainer>
            {renderedSession}
        </MenuContainer>
    );
}

function About() {
    return (
        <InfoList>
            <li>
                <Title>Especialidades: </Title> Tratamento hormonal, problemas
                de tireoide.
            </li>
            <li>
                {" "}
                <Title>Atendimento</Title> Particular, Planos de saúde.
            </li>
            <li>
                <Title>Formação Acadêmica:</Title> Formação em Medicina, PUC RJ
                - 1998. Mestrado em Endocrinologia, UFRJ 2000. Doutorado, USP -
                2006.
            </li>
        </InfoList>
    );
}

function Contact() {
    return (
        <InfoList>
            <li>Contato: (21) 93478-XXXXE-mail: L.Pereira@gmail.com</li>
            <li>
                Atendimentos: Segundas, Quartas e Sextas Das 8h - 12h e das 14h
                - 18h.
            </li>
            <li>
                Formação em Medicina, PUC RJ - 1998.Mestrado em Endocrinologia,
                UFRJ 2000.Doutorado, USP - 2006.
            </li>
        </InfoList>
    );
}

function Reviews() {
    return <InfoList>this is the review</InfoList>;
}

const InfoNavContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const SwitchInfoButton = styled.button`
    background-color: transparent;
    border: none;
    flex-grow: 1;
    border-bottom: ${({ showBorder }) =>
        showBorder ? "3px solid rgba(25, 118, 210, 0.5)" : "none"};
`;

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 40px;
`;

const Title = styled.div`
    font-weight: 700;
    margin-bottom: 4px;
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
`;
