import { useHistory } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Main } from "../styles/genericStyledComponents";
import { IoIosArrowUp } from "react-icons/io";
import { doctors } from "../mock/mockDoctors";
import {
    SearchBox,
    Order,
    IconSearch,
    IconFilter,
} from "../styles/stylesSpecialties";
import CardDoctorPost from "../components/CardDoctorPost";
import styled from "styled-components";

function Specialties() {
    const history = useHistory();
    const [specialty, setSpecialty] = useState();
    const [byespecialtyList, setByEspecialtyList] = useState([]);

    if (!localStorage.getItem("MetamorfoseTrans")) {
        history.push("/");
    }

    function listBySpecialty(e) {
        if (e.key === "Enter") {
            setByEspecialtyList(
                doctors.filter(
                    (e) =>
                        e.speciality.toLowerCase() === specialty.toLowerCase()
                )
            );
        }
    }

    return (
        <Main>
            <Navbar>Especialistas </Navbar>
            <InputContainer>
                <SearchBox
                    placeholder="pesquisar por especialidade"
                    onChange={(e) => setSpecialty(e.target.value)}
                    value={specialty}
                    onKeyPress={listBySpecialty}
                />
                <IconSearch />
                <IconFilter />
            </InputContainer>
            <Order>
                Ordernar por: proximidade{" "}
                <span>
                    <IoIosArrowUp />
                </span>
            </Order>
            {!byespecialtyList.length
                ? doctors.map((doctor) => (
                      <CardDoctorPost
                          doctor={doctor}
                          key={doctor.id}
                          specialty={specialty}
                      />
                  ))
                : byespecialtyList.map((doctor) => (
                      <CardDoctorPost
                          doctor={doctor}
                          key={doctor.id}
                          specialty={specialty}
                      />
                  ))}
        </Main>
    );
}

const InputContainer = styled.div`
    position: relative;
`;

export default Specialties;
