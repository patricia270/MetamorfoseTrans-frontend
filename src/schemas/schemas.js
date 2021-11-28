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

export {
    signInSchema,
}