import Form from "@/components/Form/Form";
import { EMAIL_PATTERN } from "@/utils/constants";
import useForm from "@/hooks/useForm";

import "@/components/Form/Form.css";

function Register({ isLoading, onRegister }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();

  function getSubmitUserInfo(event) {
    event.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      onSubmit={getSubmitUserInfo}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="Введите имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
        />
        <span className="form__input-error">{isErrors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="Введите электронную почту"
          onChange={handleChangeInput}
          pattern={EMAIL_PATTERN}
          value={enteredValues.email || ""}
        />
        <span className="form__input-error">{isErrors.email}</span>
      </label>

      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          placeholder="Введите пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
          minLength="6"
          maxLength="12"
        />
        <span className="form__input-error">{isErrors.password}</span>
      </label>
    </Form>
  );
}

export default Register;
