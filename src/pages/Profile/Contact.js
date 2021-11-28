import { Title, InfoList } from "../../styles/profileStyles";

function Contact({ contactData }) {
    const { phone, email, workSchedule, address } = contactData;

    return (
        <InfoList>
            <li>
                <Title>Contato: </Title>
                <p>{phone}</p>
                <p>E-mail: {email}</p>
            </li>
            <li>
                {" "}
                <Title>Atendimentos: </Title>
                <p>{workSchedule.days}</p>
                {workSchedule.hours.map((hour, index) => (
                    <p key={index}> {hour}</p>
                ))}
            </li>
            <li>
                <Title>Endereço: </Title> {address}
            </li>
        </InfoList>
    );
}

export default Contact;
