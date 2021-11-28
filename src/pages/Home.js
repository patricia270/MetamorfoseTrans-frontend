import { Formik, ErrorMessage} from "formik";
import { FcGoogle } from "react-icons/fc";
import {
    FormComponent,
    DivImage,
    Input,
    MyBox,
    ButtonComponent,
    ContainerComponent,
} from "../styles/genericStyledComponents";

function Home() {
    const initicialValues = {
        name: "",
        password: "",
    }

    return(
        <ContainerComponent>
            <Formik
                initialValues={initicialValues}
            >
                {() => (
                    <MyBox>
                        <DivImage />
                        <FormComponent>
                            <Input
                                name="name"
                                placeholder="USUÁRIO"
                            />
                            <Input 
                                name="password"
                                placeholder="SENHA"
                            />
                            <ButtonComponent>Login</ButtonComponent>
                        </FormComponent>
                    </MyBox>
                )}
            </Formik>
            <p>Ou</p>
        </ContainerComponent>
    );
}

export default Home;
