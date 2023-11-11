import { Link, useLocation } from "react-router-dom";
//!after 4line
import "./Form.css";
import logo from "@/assets/images/logo.svg";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ErrorContext from '../../contexts/ErrorContext';
import SendContext from '../../contexts/SendContext';
import { useEffect } from "react";
import Preloader from "../Preloader";

export default function Form({
    children,
    name,
    isValid,
    setIsError,
    values,
    isSuccess,
    setIsEdit,
    isEdit,

    // linkText,
    // url,
    // title,
    // buttonText,
    // question,
    // formAction,
    // formMethod,
    onSubmit
}) {
    const { pathname } = useLocation()
    const isError = useContext(ErrorContext)
    const isSend = useContext(SendContext)
    const currentUser = useContext(CurrentUserContext)

    useEffect(() => {
        setIsError(false)
    }, [setIsError]);


    useEffect(() => {
        if (pathname === '/profile') {
            setSuccess(false)
            setIsEdit(false)
        }
    }, [pathname, setSuccess, setIsEdit]);

    return (
        <form noValidate name={name} onSubmit={onSubmit} >
            {children}

            {name === 'signin' ?
                <>
                    <span className={`login__error-request ${isError && 'login__error-request_active'}`}>{'При входе произошла ошибка'}</span>
                    <button
                        type="submit"
                        className={`login__submit ${isValid && !isError ? '' : 'login__submit_disabled'}`}
                        disabled={!isValid || isSend || isError}>
                        {isSend ? <Preloader name='button' /> : 'Войти'}
                    </button>
                </>
                :
                name === 'signup' ?
                    <>
                        <span className={`login__error-request login__error-request_type_regist ${isError && 'login__error-request_active'}`}>{'При регистрации произошла ошибка'}</span>
                        <button
                            type="submit"
                            className={`login__submit ${isValid && !isError ? '' : 'login__submit_disabled'}`}
                            disabled={!isValid || isSend || isError}>
                            {isSend ? <Preloader name='button' /> : 'Зарегистрироваться'}
                        </button>
                    </>
                    : !isEdit ?
                        <>
                            <span className={`profile__error-request  ${isError ? 'profile__error-request_type_error' : isSuccess && 'profile__error-request_'}`}>{' '}</span> //!dode todo
                            <button
                                type="button"
                                className={'profile__submit'}
                                onClick={() => {
                                    setIsEdit(true)
                                    setSuccess(false)
                                }}>
                                {'Редактировать'}
                            </button>
                        </> :
                        <>
                            <span className={`profile__error-request  ${isError ? 'profile__error-request_type_error' : isSuccess && 'profile__error-request_'}`}>{' '}</span>
                            <button
                                type="submit"
                                className={`login__submit ${(values.username === currentUser.name && values.email === currentUser.email)}  || !isValid || isError `} //!dode todo
                                disabled={!isValid || isSend || isError}
                            >
                                {isSend ? <Preloader name='button' /> : 'Сохранить'}
                            </button>
                            <button
                                type="button"
                                className={'profile__submit'}
                                onClick={() => {
                                    setIsEdit(false)
                                    setSuccess(false)
                                    setIsError(false)
                                }}>{'Отменить редактирование'}
                            </button>



                            <section className="form-container">
                                <Link to="/" className="form-logo">
                                    <img src={logo} alt="логотип cайта" />
                                </Link>
                                <h3 className="form-title">{title}</h3>
                                <form action={formAction} method={formMethod} className="form" id="form" noValidate>
                                    {children}
                                    <button
                                        type="button"
                                        className="form__button-save"
                                        onClick={onSubmit}
                                    >
                                        {buttonText}
                                    </button>
                                </form>
                                <p className="form-text">
                                    {question}
                                    <Link to={url} className="form-link">
                                        {linkText}
                                    </Link>
                                </p>
                            </section>

                        </>
</form >

