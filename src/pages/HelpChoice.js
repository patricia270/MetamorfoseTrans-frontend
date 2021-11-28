import { useHistory } from "react-router-dom";
import questionImage from "../assets/images/question.png";
import healthImage from "../assets/images/health.png";
import { 
    DivImage, 
    MyBox, 
} from "../styles/genericStyledComponents";
import {
    GroupBox,
    MyContainer,
    ContainerMain,
    BoxOptionHelp,
} from "../styles/stylesHelpChoice";

function HelpChoice() {
    const history = useHistory();

    if (!localStorage.getItem("MetamorfoseTrans")) {
        history.push('/');
    }

    return(
        <MyBox>
            <MyContainer>
                <DivImage />
            </MyContainer>
            <ContainerMain>
                <h1>O que você precisa?</h1>
                <GroupBox>
                    <BoxOptionHelp onClick={() => history.push("/specialties")}>
                        <img src={healthImage} alt="Imagem de uma maleta de atendimento médico"/>
                        <h2>Buscar médicos</h2>
                    </BoxOptionHelp>
                    <BoxOptionHelp onClick={() => history.push("/questions")}>
                        <img src={questionImage} alt="Imagem de uma interrogação."/>            
                        <h2>Informações</h2>
                    </BoxOptionHelp>
                </GroupBox>
            </ContainerMain>
        </MyBox>
    );
}

export default HelpChoice;
