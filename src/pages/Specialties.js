import Navbar from "../components/Navbar";
import { Main } from "../styles/genericStyledComponents";
import styled from "styled-components";

function Specialties() {
    return(
        <Main>
            <Navbar />
            <input type="text" />
            <Post>
                <img alt="imagem do especialista" src="https://s3-alpha-sig.figma.com/img/d10f/2183/cac140271aabfb3d58b96c32bab892ca?Expires=1638748800&Signature=aOB7zCmGZ3xt2Q3B04SybhCkBSv5ZoGAFY8F0pf7O7FZZNCL9FNZ92u-dVRbgyWtUdF9QFGg9LKz2~25Q7Oi5rnHpVHDFkKlkjFuf9aePPirtV3CJKkgDUtmmUIRJK3IPoVVihbI6K5VgWzEpsklSbSP1bkBAHHqAT9zsTwbJuJKCLKmghcNEcbd7qPcRI0mqy7kSbd3AStfYZFDMwy1jo~q1a13DuUT9efAt6QZDu79TtstbPM-qpUIdETK7vCuwEko8eDl-cp2w9oTGYgA5MGHM5cjkme-eLnLWsOqt1vjXYSSJwKlU6gfHCYIxsaQV5WRNRputZC2jBGLNCbl6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/>
                <div>
                    <h2>Dr. Lucas Pereira</h2>
                    <p>Endocrinologista - Especialista em hormonização</p>
                </div>
            </Post>
        </Main>

    );
}

export default Specialties;

const Post = styled.div`
    width: 90.4vw;
    height: 144px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 30px 16px 0 16px;
    display: flex;
    img {
        width: 96px;
        height: 84px;
        border-radius: 10px;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
    }
    p {
        font-size: 14px;
        color: #464A4D;
    }
    div {

    }
`;