import styled from "styled-components";
import { Form, Field } from "formik";
import { Box, Container } from "@material-ui/core";

const FormComponent = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled(Field)`
    width: 83.87vw;
    height: 57px;
    margin-bottom: 20px;
    padding-left: 20px;
    border-radius: 6px;
    border: 1px solid #444444;
    outline: 0;
`;

const MyBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-top: 34px;
        font-size: 24px;
        color: #979292;
        font-weight: bold;
    }
`;

const ContainerComponent = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin-top: 34px;
        font-size: 24px;
        color: #979292;
        font-weight: bold;
        text-align: center;
    }
`;

const DivImage = styled.div`
    width: 275px;
    height: 232px;
`;

const ButtonComponent = styled.button`
    background-color: #444444;
    color: #FFFFFF;
    font-weight: bold;
    width: 83.87vw;
    height: 57px;
    font-size: 18px;
    border-radius: 6px;
`;

export {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
    ContainerComponent,
}