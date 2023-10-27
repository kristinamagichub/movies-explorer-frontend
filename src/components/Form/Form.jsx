import { Link } from "react-router-dom";
import "./Form.css";
import logo from "@/assets/images/logo.svg";

export function Form({
    children,
    linkText,
    url,
    title,
    buttonText,
    question,
    formAction,
    formMethod,
    onClick
}) {
    return (
        <section className="form__container">
            <Link to="/" className="form__logo">
                <img src={logo} alt="логотип cайта" />
            </Link>
            <h3 className="form__title">{title}</h3>
            <form action={formAction} method={formMethod} className="form" id="form" noValidate>
                {children}
                <button
                    type="button"
                    className="form__button-save"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            </form>
            <p className="form__text">
                {question}
                <Link to={url} className="form__link">
                    {linkText}
                </Link>
            </p>
        </section>
    )
}

export default Form;
