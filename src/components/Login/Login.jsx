import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/pages";
import Form from "@/components/Form/Form";
import "../Form/Form.css";
import Input from "@/components/Input"
import useFormValidation from "@/utils/useFormValidation";


export const SecondInput = ({ values, errors, isInputValid, handleChange }) => {
    return (
        <label className="form__label">
            Пароль
            <input
                className="form__input"
                id="password-input"
                name="password"
                type="password"
                placeholder="Введите пароль"
                minLength={4}
                required
                value={values.password}
                error={errors.password}
                onChange={handleChange}
                isInputValid={isInputValid.password}
            />
            <span className="form__input-error">Введите пароль</span>
        </label>
    )
}

export function Login({ name, handleLogin }) {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(UserContext);
    const { values, isValid, errors, isInputValid, handleChange } = useFormValidation();

    const loginUser = async () => {

        try {
            const response = await fetch("/login", { method: "POST" });
            const user = await response.json();
            if (user) {
                setIsLoggedIn(true)
            }
        } catch (error) {
        }
    }

    function onLogin(evt) {
        evt.preventDefault()
        handleLogin(values.email, values.password)
    }

    return (
        <Form
            formAction="/login"
            title="Рады видеть!"
            buttonText="Войти"
            question="Еще не зарегистрированы?"
            linkText=" Регистрация"
            url="/signup"
            onClick={() => { loginUser().then(() => { navigate("/profile"); }) }}

        >

            <Input
                className="form__input"
                id="email-input"
                name="email"
                type="email"
                label="Email"
                required
                validity={{
                    isValid: false,
                    message: "Адрес электронной почты должен содержать символ '@'."
                }}
                placeholder="Введите электронную почту"
                value={values.email}
                error={errors.email}
                onChange={handleChange}

            />
            <SecondInput handleChange={handleChange} values={values} errors={errors} isInputValid={isInputValid} />



        </Form>
    );
};

export default Login;
