import { useEffect, useContext, useState } from "react";

import CurrentUserContext from "@/components/CurrentUserContext/CurrentUserContext";
import Header from "@/components/Header/Header";
import useForm from "@/hooks/useForm";
import { EMAIL_PATTERN } from "@/utils/constants";

import "./Profile.css";

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
