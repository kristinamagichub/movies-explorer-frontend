import { Link, NavLink } from "react-router-dom";

import "./Navigation.css";
import account from "@/assets/images/account_check_icon.svg";

export function Navigation({ handleClose }) {
  // Функция для смены цвета для активной ссылки
  const setActiveButton = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-wrapper"></div>
      <div className="navigation__menu">
        <button className="navigation__close-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect
              x="7.16016"
              y="9.28249"
              width="3"
              height="22"
              transform="rotate(-45 7.16016 9.28249)"
              fill="black"
            />
            <rect
              x="22.7168"
              y="7.16117"
              width="3"
              height="22"
              transform="rotate(45 22.7168 7.16117)"
              fill="black"
            />
          </svg>{" "}
        </button>
        <nav className="navigation__links-list">
          <NavLink to="/" className={setActiveButton} onClick={handleClose}>
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__account-button"
          onClick={handleClose}
        >
          <div className="navigation__account-text">Аккаунт</div>
          <img src={account} alt="account" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
