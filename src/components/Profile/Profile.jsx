import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../CurrentUserContext/CurrentUserContext";
import useForm from "../../hooks/useForm";
import "./Profile.css";
import Header from "../Header/Header";
import { EMAIL_PATTERN } from "../../utils/constants";

export function Profile({ loggedIn, signOut, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, isErrors, handleChangeInput, isFormValid, resetForm } =
    useForm();
  const [isLastData, setIsLastData] = useState(false);

  function getSubmitUserInfo(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastData(true);
    } else {
      setIsLastData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <form
          id="form"
          className="profile__form"
          onSubmit={getSubmitUserInfo}
          noValidate
        >
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
              onChange={handleChangeInput}
              value={enteredValues.name || ""}
            />
            <span className="profile__input-error">{isErrors.name}</span>
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
              pattern={EMAIL_PATTERN}
              value={enteredValues.email || ""}
              onChange={handleChangeInput}
            />
            <span className="profile__input-error">{isErrors.email}</span>
          </label>

          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastData
                ? "profile__button-edit profile__button-edit_inactive"
                : "profile__button-edit"
            }
          >
            {!isFormValid ? "Редактировать" : "Сохранить"}
          </button>
          <button type="button" className="profile__exit" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
