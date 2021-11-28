import styled from "styled-components";
import { Form, Field } from "formik";
import { Box } from "@material-ui/core";
import logo from "../assets/images/logo.png"

const FormComponent = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: #FF0000;
        align-self: start;
        margin-top: 5px;
        text-align: start;
    }
`;

const Input = styled(Field)`
    width: 83.87vw;
    height: 57px;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 6px;
    border: 1px solid #444444;
    outline: 0;
`;

const MyBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    span {
        margin: 21px 0 34px 0;
        font-size: 24px;
        color: #979292;
        font-weight: bold;
    }
    a {
        color: #979292;
        font-size: 18px;
        align-self: start;
        margin: 20px 0 12px 8vw;
    }
    a:last-child {
        margin-top: 0;
    }
`;

const DivImage = styled.div`
    width: 275px;
    height: 232px;
    margin: 14px 0 23px 0;
    background-image: url(${logo});
    background-position: center;
`;

const ButtonComponent = styled.button`
    background-color: #444444;
    color: #FFFFFF;
    font-weight: bold;
    width: 83.87vw;
    height: 57px;
    font-size: 18px;
    border-radius: 6px;
    margin-top: 20px;
`;

const BoxSocialLogos = styled.div`
    width: 83.87vw;
    height: 57px;
    border: 1px solid #444444;
    border-radius: 6px;
    padding-left: 17px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    p {
        font-size: 18px;
        color: #979292;
        font-weight: bold;
        margin-left: 24px;
    }
`;

export {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
    BoxSocialLogos,
}