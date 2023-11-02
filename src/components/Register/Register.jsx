import "../Form/Form.css"
import Form from "../Form/Form"
import useFormValidation from "@/utils/useFormValidation"

export function Register({ name, onRegister }) {
    const { values, isValid, errors, isInputValid, handleChange } = useFormValidation()

    function onSubmit(evt) {
        evt.preventDefault()
        onRegister(values.password, values.email)
    }
    return (

        <Form
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            question="Уже зарегистрированы?"
            linkText=" Войти"
            url="/signin"
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
                    required
                    placeholder="Введите пароль"
                />
                <span className="form__input-error">Заполните поле</span>
            </label>
        </Form>

    )
}

export default Register
