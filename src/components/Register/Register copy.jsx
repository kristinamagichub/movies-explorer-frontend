import Input from "../Input/Input copy";
import SectionLogin from "../SectionLogin/SectionLogin copy";
import useFormValidation from "@/utils/useFormValidation";
import { EmailRegex } from "@/utils/constants";

export default function Register({ name, onRegister, setIsError }) {
    const { values, isValid, errors, isInputValid, handleChange } = useFormValidation()

    function onSubmit(event) {
        event.preventDefault();
        onRegister(values.username, values.email, values.password)
    }
    return (
        <SectionLogin name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError} >
            <Input
                name="username"
                type="text"
                title="Имя"
                minLength="2"
                maxLength="40"
                value={values.username}
                error={errors.name}
                onChange={(evt) => {
                    handleChange(evt)
                    setIsError(false)
                }}
                isInputValid={isInputValid.username}
                placeholder="Введите имя"
            />
            <Input
                name="email"
                type="email"
                title="Email"
                value={values.email}
                isInputValid={isInputValid.email}
                error={errors.email}
                onChange={(evt) => {
                    handleChange(evt)
                    setIsError(false)
                }}
                pattern={EmailRegex}
                placeholder="Введите электронную почту"
            />

            <Input
                name="password"
                type="password"
                title="Пароль"
                minLength="3"
                value={values.password}
                isInputValid={isInputValid.email}
                error={errors.password}
                onChange={(evt) => {
                    handleChange(evt)
                    setIsError(false)
                }}
                placeholder="Введите пароль"
            />
        </SectionLogin>
    )
}
