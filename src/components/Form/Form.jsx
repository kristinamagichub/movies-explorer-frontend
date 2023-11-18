import { Link } from "react-router-dom";
import "./Form.css";
import logo from "@/assets/images/logo.svg";

export function Form({
  linkText,
  link,
  children,
  title,
  buttonText,
  question,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <section className="form-container">
      <Link to="/" className="form-logo">
        <img src={logo} alt="логотип cайта" />
      </Link>
      <h3 className="form-title">{title}</h3>
      <form
       
        className="form"
        id="form"
        onSubmit={onSubmit}
        noValidate
      >
        {children}

        <button
          className={
            isDisabled || isLoading
              ? "form__button-save form__button-save_inactive"
              : "form__button-save"
          }
          type="submit"
          disabled={isDisabled ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <p className="form-text">
        {question}
        <Link to={link} className="form-link">
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default Form;
