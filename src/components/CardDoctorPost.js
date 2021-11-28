import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import {
    CardInfoDoctor,
    Stars,
    IconHearth,
} from "../styles/stylesSpecialties";

function CardDoctorPost({ doctor }) {
    return(
        <CardInfoDoctor>
            <Link to={`profile/${doctor.id}`}>
                <img alt="imagem do especialista" src={doctor.img_url} />
            </Link>
            <div>
                <Link to={`profile/${doctor.id}`}>
                    <h2>{doctor.name}</h2>
                </Link>
                <p><span>{doctor.speciality}</span> - {doctor.subtitle}</p>
                <Stars>
                    <FaStar size="20" color="yellow" />
                    <FaStar size="20" color="#CDCDCD"/>
                    <FaStar size="20" color="#CDCDCD"/>
                    <FaStar size="20" color="#CDCDCD"/>
                    <FaStar size="20" color="#CDCDCD"/>
                </Stars>
            </div>
            <IconHearth />
        </CardInfoDoctor>
    );
}

export default CardDoctorPost;