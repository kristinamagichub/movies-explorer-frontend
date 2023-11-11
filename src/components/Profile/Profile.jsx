import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useContext, useState } from "react";
import { UserContext } from "@/pages";
import useFormValidation from "@/utils/useFormValidation";
import { CurrentUserDispatchContext, CurrentUserContext } from "../../currentUserContext";

export function Profile({ name, handleRegister }) {
    const { pathname } = useLocation()
    const [isDisabled, setIsDisabled] = useState(false)
    const [isError, setIsError] = useState(false)
    const { setIsLoggedIn } = useContext(UserContext)
    const { name: userName } = useContext(CurrentUserContext);
    const dispatch = useContext(CurrentUserDispatchContext);
    // const { setIsLoggedIn } = useContext(currentUser)
    const navigate = useNavigate();
    const isEdit = pathname === "/profile/edit"

    const { values, errors, isValid, isInputValid, handleChange, reset, setValue } = useFormValidation()

    function onRegister(evt) {
        evt.preventDefault()
        handleRegister(values.password, values.email)
    }

    const saveData = async () => {
        try {
            setIsError(false);
            setIsDisabled(false);
            const response = await fetch("/save-profile", { method: "POST" });
            const movies = await response.json();
        } catch (error) {
            setIsError(true);
            setIsDisabled(true);
        }
    }

    const logout = async () => {
        try {
            const response = await fetch("/logout", { method: "GET" });
            const user = await response.json();
            if (user) {
                setIsLoggedIn(false)
            }
        } catch (error) {
        }
    }

    return (
        <>
            <section className="profile">
                <h3 className="profile__title">{`Привет, ${userName}`}</h3>
                <form id="form" className="profile__form" noValidate>
                    <label className="profile__label">
                        Имя
                        <input
                            name="name"
                            className="profile__input"
                            id="name-input"
                            type="text"
                            minLength="2"
                            maxLength="40"
                            required
                            placeholder="Введите имя"
                        />
                        <span className="profile__input-error"></span>
                    </label>

                    <div className="profile__border"></div>
                    <label className="profile__label">
                        E-mail
                        <input
                            name="email"
                            className="profile__input"
                            id="email-input"
                            type="email"
                            required
                            placeholder="Введите электронную почту"
                        />
                        <span className="profile__input-error"></span>
                    </label>
                    {!isEdit && (
                        <>
                            <Link to="edit" className="profile__button-edit" >
                                Редактировать
                            </Link>
                            {/* <button onClick={() => { logout().then(() => { navigate("/"); }) }} type="button" className="profile__exit"> */}
                            <button onClick={() => { logout().then(() => { dispatch({ type: "loggedOut" }) }).then(() => { navigate("/"); }) }} type="button" className="profile__exit">
                                Выйти из аккаунта
                            </button>
                        </>
                    )
                    }
                    {isEdit && (
                        <>
                            {isError && (
                                <p
                                    className="profile__button-save_error" >
                                    При обновлении профиля произошла ошибка
                                </p>
                            )
                            }

                            <button
                                onClick={saveData}
                                type="button"
                                disabled={isDisabled}
                                className="profile__button-save" >
                                Сохранить
                            </button>

                        </>
                    )
                    }

                </form>
            </section>
        </>
    );
}

export default Profile;
