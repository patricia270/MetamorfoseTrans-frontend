import { Title, InfoList } from "../../styles/profileStyles";

function About({ aboutData }) {
    return (
        <InfoList>
            <li>
                <Title>Especialidades: </Title> {aboutData.speciality}
            </li>
            <li>
                {" "}
                <Title>Atendimento</Title> {aboutData.acceptedPlans}
            </li>
            <li>
                <Title>Formação Acadêmica:</Title>{" "}
                {aboutData.schooling.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </li>
        </InfoList>
    );
}

export default About;
