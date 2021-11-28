import { Formik, ErrorMessage} from "formik";
import { signInSchema } from "../schemas/schemas";
import {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
} from "../styles/genericStyledComponents";

function Home() {
    const initicialValues = {
        email: "",
        password: "",
    }

    function sendLogingInfo(values) {
        console.log(values)
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
