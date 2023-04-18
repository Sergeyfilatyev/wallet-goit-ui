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
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password is too short")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Password must match its confirmation "
    ),
  name: Yup.string().min(1, "Name is too short").required("Name is required"),
});

export const validationSchemaLoginRu = Yup.object().shape({
  email: Yup.string().email("Неправильный email").required("Email обязателен"),
  password: Yup.string().required("Пароль обязателен"),
});

export const validationSchemaRegisterRu = Yup.object().shape({
  email: Yup.string().email("Неправильный email").required("Email обязателен"),
  password: Yup.string()
    .min(8, "Пароль слишком короткий")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .min(8, "Пароль слишком короткий")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Подтверждение пароля обязательно")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
  name: Yup.string().min(1, "Имя слишком короткое").required("Имя обязательно"),
});

export const validationSchemaLoginUa = Yup.object().shape({
  email: Yup.string()
    .email("Неправильний email")
    .required("Email обов'язковий"),
  password: Yup.string().required("Пароль обов'язковий"),
});

export const validationSchemaRegisterUa = Yup.object().shape({
  email: Yup.string()
    .email("Неправильний email")
    .required("Email обов'язковий"),
  password: Yup.string()
    .min(8, "Пароль занадто короткий")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Пароль обов'язковий"),
  confirmPassword: Yup.string()
    .min(8, "Пароль занадто короткий")
    .matches(
      "(?=.*[0-9])(?=.*[@$!%*?.,/-_&])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?.,/-_&]{8,}",
      "8+ characters: a-z, A-Z, 0-9, symbols(@$!%*?.,/-&)"
    )
    .required("Підтвердження пароля обов'язкове")
    .oneOf([Yup.ref("password"), null], "Паролі мають співпадати"),
  name: Yup.string()
    .min(1, "Ім'я занадто коротке")
    .required("Ім'я обов'язкове"),
});
