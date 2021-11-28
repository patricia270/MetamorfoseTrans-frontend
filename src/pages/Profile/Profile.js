import Navbar from "../../components/Navbar";
import { Main } from "../../styles/genericStyledComponents";
import styled from "styled-components";
import InfoMenu from "./InfoMenu";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { doctors } from "../../mock/mockData";
import { useParams } from "react-router";

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const doctorProfile = doctors.find(
            (doctor) => doctor.id === Number(id)
        );
        console.log(doctorProfile);
        setProfileData(doctorProfile);
    }, [id]);

    if (!profileData) return "carregando";
    return (
        <Main>
            <Navbar />
            <InnerWrapper>
                <ProfileHeader>
                    <AuxContainer>
                        <Image src={profileData.imgUrl} />
                        <Name>{profileData.name}</Name>
                        <div>
                            <Bold>{profileData.speciality} </Bold> -{" "}
                            {profileData.subtitle}
                        </div>
                        <div>{profileData.doctorCode}</div>
                        <Stars>
                            <FaStar size="20" color="yellow" />
                            <FaStar size="20" color="#CDCDCD" />
                            <FaStar size="20" color="#CDCDCD" />
                            <FaStar size="20" color="#CDCDCD" />
                            <FaStar size="20" color="#CDCDCD" />
                        </Stars>
                    </AuxContainer>
                </ProfileHeader>
                <InfoMenu profileData={profileData} />
            </InnerWrapper>
        </Main>
    );
}

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 94vh;
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

const Stars = styled.div`
    margin-top: 10px;
`;

export default Profile;
