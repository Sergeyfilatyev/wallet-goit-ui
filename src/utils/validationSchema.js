import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const validationSchemaRegister = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-_&)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password is too short")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-_&)"
    )
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Password must match its confirmation "
    ),
  name: Yup.string().min(1, "Name is too short").required("Name is required"),
});
