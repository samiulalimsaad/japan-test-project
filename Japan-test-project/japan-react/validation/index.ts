import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});
