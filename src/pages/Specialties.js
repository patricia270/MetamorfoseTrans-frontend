import Navbar from "../components/Navbar";
import { Main } from "../styles/genericStyledComponents";
import styled from "styled-components";
import { FaStar } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
function Specialties() {
     const doctors = [
         {
            name: "Dr. Lucas Pereira",
            img_url: "https://s3-alpha-sig.figma.com/img/d10f/2183/cac140271aabfb3d58b96c32bab892ca?Expires=1638748800&Signature=aOB7zCmGZ3xt2Q3B04SybhCkBSv5ZoGAFY8F0pf7O7FZZNCL9FNZ92u-dVRbgyWtUdF9QFGg9LKz2~25Q7Oi5rnHpVHDFkKlkjFuf9aePPirtV3CJKkgDUtmmUIRJK3IPoVVihbI6K5VgWzEpsklSbSP1bkBAHHqAT9zsTwbJuJKCLKmghcNEcbd7qPcRI0mqy7kSbd3AStfYZFDMwy1jo~q1a13DuUT9efAt6QZDu79TtstbPM-qpUIdETK7vCuwEko8eDl-cp2w9oTGYgA5MGHM5cjkme-eLnLWsOqt1vjXYSSJwKlU6gfHCYIxsaQV5WRNRputZC2jBGLNCbl6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            speciality: "Endocrinologista",
            subtitle: "Especialista em hormonização",
        },
        {
            name: "Dr. Lala",
            img_url: "https://setorsaude.com.br/wp-content/uploads/2018/02/Instituto-de-Sa%C3%BAde-da-Fam%C3%ADlia-abre-inscri%C3%A7%C3%B5es-de-concurso-para-contratar-m%C3%A9dicos.jpg",
            speciality: "Endocrinologista",
            subtitle: "Especialista em hormonização",
        },
        {
            name: "Dr. Lucas Pereira",
            img_url: "https://s3-alpha-sig.figma.com/img/2112/a39a/5443ddd5e4aa160e9714f4771910db07?Expires=1638748800&Signature=X2~DGYvf6o3ZCVZ8Oe0luHYKkB7hjuqoYaNWbxv0y4TBGf74Z1X2wTIphnsBZhwmc2nLehB-KHHfyhmxBIRZ0a8OM6WEizsTtaA2M9B2Wm6i~jaK5RvVLWMaSmiKILE0pZUZo246Ri6ps83YCRUViftSEv~2BOYcAcv5uPopk8OcV2WibZEhqGXD7HINpcsI5N7TnAZTnVgEYO59fpwxXjExT5SQnKyWqniYO-foR2CslF654DHi6WbWz4xjidZFb~Csj~j2B2Bu0Qe1NhQ7YONMVWpjZAvL~qBkHhYWxM1Neo~h3uyhS1~4~jA2PdYfNs2BVaCxwdH5pKlQY3ABxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            speciality: "Endocrinologista",
            subtitle: "Especialista em hormonização",
        }, 
    ]

    return(
        <Main>
            <Navbar />
            <SearchBox type="text" placeholder="pesquisar por especialidade"/>
            <IconSearch />
            <IconFilter />
            <Order>Odernar por: proximidade <span><IoIosArrowUp /></span></Order>
            { doctors.map((doctor) => (
                <CardInfoDoctor>
                <img alt="imagem do especialista" src={doctor.img_url} />
                <div>
                    <h2>{doctor.name}</h2>
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
            ))}
        </Main>

    );
}

export default Specialties;

const CardInfoDoctor = styled.div`
    width: 90.4vw;
    height: 144px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 30px 0 0 16px;
    display: flex;
    position: relative;
    margin-bottom: 34px;
    img {
        width: 96px;
        height: 84px;
        border-radius: 10px;
        margin-right: 10px;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        color: #464A4D;
        max-width: 55vw;
    }
    span {
        font-weight: bold;
    }
    div {

    }
`;

const Stars = styled.div`
    margin-top: 10px;
`;

const SearchBox = styled.input`
    margin: 103px 0 29px 0;
    min-height: 57px;
    border-radius: 6px;
    text-align: center;
    ::placeholder {
        font-size: 16px;
    }

`;

const Order = styled.div`
    color: #FFFFFF;
    align-self: flex-start;
    padding-left: 6vw;
    margin-bottom: 29px;
`;

const IconSearch = styled(IoSearchSharp)`
    width: 25px;
    height: 25px;
    color: #C4C4C4;
    position: absolute;
    left: 10vw;
    top: 18vh;
`;

const IconFilter = styled(FiFilter)`
    width: 25px;
    height: 25px;
    color: #979292;
    position: absolute;
    right: 10vw;
    top: 18vh;
`;

const IconHearth = styled(AiOutlineHeart)`
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 13px;
    right: 13px;
`;