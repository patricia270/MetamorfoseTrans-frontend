import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import { Formik, ErrorMessage} from "formik";
import UserContext from "../contexts/userContext";
import { signInSchema } from "../schemas/schemas";
import { postSignIn } from "../services/api";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import errors from "../services/errors";
import {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
    BoxSocialLogos,
} from "../styles/genericStyledComponents";

function Home() {
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const initicialValues = {
        email: "",
        password: "",
    }


    if (localStorage.getItem("MetamorfoseTrans")) {
        history.push("/help-choice");
    }

    function sendLogingInfo(values) {
        postSignIn(values)
            .then((resp) => {
                setUser(resp.data); 
                localStorage.setItem("MetamorfoseTrans", JSON.stringify(resp.data));
                history.push("/help-choice")               
            })
            .catch((error) => { 
                errors(error);             
        })
    }

    return(

        <Formik
            initialValues={initicialValues}
            validationSchema={signInSchema}
            onSubmit={sendLogingInfo}
        >
            {() => (
                <MyBox>
                    <DivImage />
                    <FormComponent>
                        <Input
                            name="email"
                            placeholder="USUÁRIO"
                        />
                        <ErrorMessage name='email' render={msg => ( 
                            <p>{msg}</p>
                        )} />
                        <Input 
                            name="password"
                            type="password"
                            placeholder="SENHA"
                        />
                        <ErrorMessage name='password' render={msg => ( 
                            <p>{msg}</p>
                        )} />
                        <ButtonComponent type="submit">Login</ButtonComponent>
                    </FormComponent>
                    <span>Ou</span>
                    <BoxSocialLogos>
                        <FcGoogle size="30" />
                        <p>Google</p>
                    </BoxSocialLogos>
                    <BoxSocialLogos>
                        <AiFillFacebook color="#3b5998" size="30"  />
                        <p>Facebook</p>
                    </BoxSocialLogos>
                    <Link to="#">
                        Esqueceu a senha?
                    </Link>
                    <Link to="/sign-up">
                        Primeira vez? Faça seu Cadastro.
                    </Link>
                </MyBox>
            )}
        </Formik>
    );
}

export default Home; 
