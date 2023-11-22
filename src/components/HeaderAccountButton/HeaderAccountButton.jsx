import { Link } from "react-router-dom";

import "./HeaderAccountButton.css";

export const HeaderAccountButton = ({
  toggleOpen,
  isPrimary,
  className,
  isMobile,
}) => (
  <>
    <Link
      to="/profile"
      className={`header__account-button header__account-button_hide-on-mobile ${className} ${
        isPrimary && "header__account-button_primary"
      }`}
    >
      <span className="header__account-button-text">Аккаунт</span>
      <div className="header__account-profile-wrapper">
        <svg
          className="header__account-image"
          alt="иконка аккаунта"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.42973 7.96781C8.79156 7.40572 9.74998 6.06478 9.74998 4.5C9.74998 2.42893 8.07105 0.75 5.99998 0.75C3.92891 0.75 2.24998 2.42893 2.24998 4.5C2.24998 6.06473 3.20833 7.40563 4.57009 7.96775C3.17543 8.19993 1.89251 8.76594 0.808228 9.58058L2.18978 11.4194C3.25107 10.6221 4.56862 10.15 5.99973 10.15C7.43085 10.15 8.7484 10.6221 9.80969 11.4194L11.1912 9.58058C10.1071 8.76601 8.82425 8.20003 7.42973 7.96781Z"
            fill="black"
          />
        </svg>
      </div>
    </Link>

    {!isMobile && (
      <button
        onClick={toggleOpen}
        className={`header__menu-button ${
          isPrimary && "header__menu-button_primary"
        }  `}
      >
        <svg
          alt="меню"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 14L8 14V11L36 11V14Z"
            fill={isPrimary ? "white" : "black"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 24L8 24V21L36 21V24Z"
            fill={isPrimary ? "white" : "black"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 34L8 34V31L36 31V34Z"
            fill={isPrimary ? "white" : "black"}
          />
        </svg>
      </button>
    )}
  </>
);

export default HeaderAccountButton;
