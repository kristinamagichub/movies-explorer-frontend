import { Link } from "react-router-dom";
import "./Profile.css";
import { useContext, useEffect } from "react";
import useFormValidation from "@/utils/useFormValidation";
import { CurrentUserContext } from "../../CurrentUserContext";
import { EmailRegex } from "../../utils/constants"
import Form from "../Form/Form"
import Input from "../Input/Input";

export default function Profile({ name, logout, editUserData, setIsError, isSuccess, setSuccess, setIsEdit, isEdit }) {
    const currentUser = useContext(CurrentUserContext)
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    useEffect(() => {
        reset({ username: currentUser.name, email: currentUser.email })
    }, [reset, currentUser, isEdit])

    function onSubmit(evt) {
        evt.preventDefault()
        editUserData(values.username, values.email)
    }

    return (
        <section className="profile">
            <h3 className="profile__title">{`Привет, ${currentUser.name}`}</h3>
            <Form
                name={name}
                isValid={isValid}
                onSubmit={onSubmit}
                setIsError={setIsError}
                values={values}
                isSuccess={isSuccess}
                setSuccess={setSuccess}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
            >
                <Input
                    selectname={name}
                    name="username"
                    type="text"
                    title='Имя'
                    minLength="2"
                    maxLength="40"
                    value={values.username}
                    isInputValid={isInputValid.username}
                    error={errors.username}
                    onChange={handleChange}
                    isEdit={isEdit}
                />

                <Input
                    selectname={name}
                    name='email'
                    type='email'
                    title='Email'
                    value={values.email}
                    isInputValid={isInputValid.email}
                    error={errors.email}
                    pattern={EmailRegex} //!dode todo
                    isEdit={isEdit}
                />
            </Form>
            <Link to='/' onClick={logout} className="profile__exit">
                Выйти из аккаунта
            </Link>

        </section >

    );
}
