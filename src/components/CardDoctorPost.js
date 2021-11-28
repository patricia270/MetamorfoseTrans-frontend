import { Link } from "react-router-dom";
import { CardInfoDoctor, IconHearth } from "../styles/stylesSpecialties";
import Stars from "../components/Stars";

function CardDoctorPost({ doctor, specialty }) {
    return (
        <CardInfoDoctor>
            <Link to={`profile/${doctor.id}`}>
                <img alt="imagem do especialista" src={doctor.imgUrl} />
            </Link>
            <div>
                <Link to={`profile/${doctor.id}`}>
                    <h2>{doctor.name}</h2>
                </Link>
                <p>
                    <span>{doctor.speciality}</span> - {doctor.subtitle}
                </p>
                <Stars rating={2} margin="10px 0 0 0" />
            </div>
            <IconHearth />
        </CardInfoDoctor>
    );
}

export default CardDoctorPost;
