import Navbar from "../../components/Navbar";
import { Main } from "../../styles/genericStyledComponents";
import styled from "styled-components";
import InfoMenu from "./InfoMenu";

function Profile() {
    return (
        <Main>
            <Navbar />
            <InnerWrapper>
                <ProfileHeader>
                    <AuxContainer>
                        <Image src="https://myteledoc.app/wp-content/uploads/2020/09/happy-young-female-doctor-smiling-and-looking-at-c-WDEKYYG.jpg" />
                        <Name>Dr. Lucas Pereira</Name>
                        <div>
                            <Bold>Endocrinologista </Bold> - Especialista em
                            hormonização
                        </div>
                        <div>
                            <Bold>CRM:</Bold> 85490/54
                        </div>
                    </AuxContainer>
                </ProfileHeader>
                <InfoMenu />
            </InnerWrapper>
        </Main>
    );
}

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
`;

const Name = styled.h1`
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
`;

const Bold = styled.span`
    font-weight: 700;
`;

const Image = styled.img`
    width: 85px;
    height: 95px;
    border-radius: 10px;
`;
const ProfileHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AuxContainer = styled.div`
    max-width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > div {
        margin-top: 8px;
    }
`;

export default Profile;
