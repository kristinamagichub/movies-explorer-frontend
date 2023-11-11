import { Link } from 'react-router-dom';
import Form from '../Form/Form';


export default function SectionLogin({ name, isValid, onSubmit, setIsError, children }) {

    return (
        <section className='login page__login'>
            <Link to="/" className="login__link-home"></Link>
            <h2 className='login__title'>{name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
            <Form
                name={name}
                isValid={isValid}
                onSubmit={onSubmit}
                setIsError={setIsError}
            >{children}</Form>

            {name === 'signin' ? <p className='login__text'>Еще не зарегистрированы? <Link to={'/signup'} className='login__link'>Регистрация</Link> </p>
                : name === 'signup' ?
                    <p className='login__text'>Уже зарегистрированы?<Link to={'/signin'} className='login__link'>Войти</Link></p>
                    : <Link to={'/'}>Выйти из аккаунта</Link>
            }
        </section >
    )
}
