import { NavLink, Link, useNavigate } from "react-router-dom";

import "./Navigation.css";

export const AccountButton = (onClick, to, className = "") => (
    <Link onClick={onClick} to={to} className={`account-button ${className}`} >
        <span className="account-button__text">Аккаунт</span>
        <div className="profile-icon-wrapper">
            <svg className="profile-icon-wrapper__image" alt="иконка аккаунта" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.42973 7.96781C8.79156 7.40572 9.74998 6.06478 9.74998 4.5C9.74998 2.42893 8.07105 0.75 5.99998 0.75C3.92891 0.75 2.24998 2.42893 2.24998 4.5C2.24998 6.06473 3.20833 7.40563 4.57009 7.96775C3.17543 8.19993 1.89251 8.76594 0.808228 9.58058L2.18978 11.4194C3.25107 10.6221 4.56862 10.15 5.99973 10.15C7.43085 10.15 8.7484 10.6221 9.80969 11.4194L11.1912 9.58058C10.1071 8.76601 8.82425 8.20003 7.42973 7.96781Z" fill="black" />
            </svg>
        </div>
    </Link>
);

export function Navigation({ isPrimary, toggleOpen }) {
    const navigate = useNavigate();
    const onNav = (e, to) => {
        e.preventDefault();
        navigate(to);
        toggleOpen();
    }
    const menu = [{ url: '/', title: 'Главная' }, { url: '/movies', title: 'Фильмы' }, { url: '/saved-movies', title: 'Сохранённые фильмы' }];
    return (
        <div className="navigation-overlay">
            <div className="navigation-menu">
                <button
                    className="navigation-menu__close-button"
                    onClick={toggleOpen}
                >  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="7.16016" y="9.28249" width="3" height="22" transform="rotate(-45 7.16016 9.28249)" fill="black" />
                        <rect x="22.7168" y="7.16117" width="3" height="22" transform="rotate(45 22.7168 7.16117)" fill="black" />
                    </svg>  </button>
                <nav className="navigation-menu__links">
                    {menu.map(({ url, title }) => (<NavLink
                        exact
                        onClick={(e) => { onNav(e, url) }}
                        to={url}
                        className={({ isActive }) =>
                            [isActive && "navigation-link_active", "navigation-link"].join(" ")
                        }
                    >
                        {title}
                    </NavLink>))}
                </nav>
                <AccountButton onClick={(e) => { onNav(e, '/profile') }} to="/profile" className="navigation-menu__button" />
            </div>
        </div >
    );
}

export default Navigation;
