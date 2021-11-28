import { useHistory } from "react-router";
import { Formik, ErrorMessage} from "formik";
import { signUpSchema } from "../schemas/schemas";
import { postSignUp } from "../services/api";
import errors from "../services/errors";
import Swal from 'sweetalert2';
import {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
    Section,
    Label,
    TermsCheckbox,
} from "../styles/genericStyledComponents";

function SignUp() {
    const history = useHistory();
    const initicialValues = {
        completeName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: [],
    }

    function sendRegistrationInfo({ email, completeName, password}) {
        postSignUp({
            name: completeName,
            email,
            password,
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Que maraaa...',
                    text: "Deu tudo certo com seu cadastro, já pode fazer login :)",
                })
                history.push("/");
            })
            .catch((error) => {
                console.log(error.response.status)
                errors(error)
            })
    }

    return(

        <Formik
            initialValues={initicialValues}
            validationSchema={signUpSchema}
            onSubmit={sendRegistrationInfo}
        >
            {() => (
                <MyBox>
                    <DivImage />
                    <FormComponent>
                        <Section>
                            <Label for="completeName">Nome completo</Label>
                            <Input type="text" name="completeName"></Input>
                            <ErrorMessage name="completeName" render={msg => ( 
                                <p>{msg}</p>
                            )} />
                            <Label for="email">Endereço de e-mail</Label>
                            <Input type="email" name="email"></Input>
                            <ErrorMessage name="email" render={msg => ( 
                                <p>{msg}</p>
                            )} />
                            <Label for="password">Senha</Label>
                            <Input type="password" name="password"></Input>
                            <ErrorMessage name="password" render={msg => ( 
                                <p>{msg}</p>
                            )} />
                            <Label for="confirmPassword">Repita sua senha</Label>
                            <Input type="password" name="confirmPassword"></Input>
                            <ErrorMessage name="confirmPassword" render={msg => ( 
                                <p>{msg}</p>
                            )} />
                            <TermsCheckbox type="checkbox" name="terms" value="yes" />
                            <Label for="terms">Concordo com os termos de uso.</Label>
                            <ErrorMessage name="terms" render={msg => ( 
                                <p>{msg}</p>
                            )} />
                        </Section>
                        <ButtonComponent type="submit">Cadastrar</ButtonComponent>
                    </FormComponent>
                </MyBox>
            )}
        </Formik>
    );
}

export default SignUp;

