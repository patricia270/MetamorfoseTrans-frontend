import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Formik, ErrorMessage} from "formik";
import UserContext from "../contexts/userContext";
import { signInSchema } from "../schemas/schemas";
import { postSignIn } from "../services/api";
import {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
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
            .catch(() => { 
                alert("houve um erro")              
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
                </MyBox>
            )}
        </Formik>
    );
}

export default Home;
