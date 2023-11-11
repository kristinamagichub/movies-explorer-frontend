import "../Form/Form.css"
import Form from "../Form/Form"
import useFormValidation from "@/utils/useFormValidation"

export function Register({ name, onRegister }) {
    const { values, isValid, errors, isInputValid, handleChange } = useFormValidation()

    function onSubmit(event) {
        event.preventDefault();
        onRegister(values.name, values.email, values.password)
    }
    return (
        <Form
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            question="Уже зарегистрированы?"
            linkText=" Войти"
            url="/signin"

            onSubmit={onSubmit}
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
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите имя"
                />
                <span className="form__input-error">Заполните поле</span>
            </label>
            <label className="form__label">
                E-mail
                <input
                    name="email"
                    className="form__input"
                    id="email-input"
                    type="email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    required
                    placeholder="Введите электронную почту"
                />
                <span className="form__input-error">Адрес электронной почты должен содержать символ "@".</span>
            </label>

            <label className="form__label">
                Пароль
                <input
                    name="password"
                    className="form__input"
                    id="password-input"
                    type="password"
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                    required
                    placeholder="Введите пароль"
                />
                <span className="form__input-error">Заполните поле</span>
            </label>
        </Form>

    )
}

export default Register
