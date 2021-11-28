import styled from "styled-components";
import { useState } from "react";
import { InfoList } from "../../styles/profileStyles";
import About from "./About";
import Contact from "./Contact";

export default function InfoMenu({ profileData }) {
    const { about, contact, reviews } = profileData;

    const [renderedSession, setRenderedSession] = useState(
        <About aboutData={about} />
    );
    const [chosenSession, setChosenSession] = useState("about");

    function chooseSession(component) {
        setChosenSession(component);

        if (component === "contact") {
            setRenderedSession(<Contact contactData={contact} />);
            return;
        }

        if (component === "reviews") {
            setRenderedSession(<Reviews reviewData={reviews} />);
            return;
        }

        setRenderedSession(<About aboutData={about} />);
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
    width: 33%;
    font-size: 14px;
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
