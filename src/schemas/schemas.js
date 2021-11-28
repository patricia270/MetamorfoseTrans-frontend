import * as Yup from "yup";

const signInSchema = Yup.object({
    email: Yup.string().max(60, "Deve ter no máximo 60 caracteres.")
    .email("Insira um email válido.")
    .required("Por favor, preencha este campo."),
    password: Yup.string().min(6, "Deve ter no mínimo 6 caracteres.")
    .max(60, "Deve ter no máximo 60 caracteres.")
    .matches(/^\S+$/, "Não deve ter espaços")
    .required("Por favor, preencha este campo."),
});

const signUpSchema = Yup.object({
    completeName: Yup.string().trim().min(3, "Deve ter no mínimo 3 caracteres")
    .max(60, "Deve ter no máximo 60 caracteres").required("Por favor, preencha este campo."),
    email: Yup.string().max(60, "Deve ter no máximo 60 caracteres.")
    .email("Insira um email válido.")
    .required("Por favor, preencha este campo."),
    password: Yup.string().min(6, "Deve ter no mínimo 6 caracteres.")
    .max(60, "Deve ter no máximo 60 caracteres.")
    .matches(/^\S+$/, "Não deve ter espaços")
    .required("Por favor, preencha este campo."),
    confirmPassword: Yup.string().min(6, "Deve ter no mínimo 6 caracteres")
    .max(60, "Deve ter no máximo 60 caracteres.")    
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem.')
    .required("Por favor, preencha este campo."),
    terms: Yup.array().min(1, "Deve ser aceito").required("Deve ser aceito"),
});

export {
    signInSchema,
    signUpSchema,
}