import { useContext } from "react"
import SendContext from "../../contexts/SendContext"

export default function Input({
    name, selectname, title, type, placeholder, minLength, onChange, value, isInputValid, error, pattern, isEdit
}) {
    const isSend = useContext(SendContext)
    return (
        <>
            {selectname !== 'profile' ?
                <label className="login__label">
                    <span className="login__subtitle">{title}</span>
                    <input
                        className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        required
                        value={value || ''}
                        autoComplete='on'
                        disabled={isSend}
                        pattern={pattern}
                        onChange={onChange}
                        minLength={minLength || ''}
                    />
                    <span className="login__error">{error}</span>
                </label>
                :
                <>
                    <label className="profile__label">
                        <span className="profile__subtitle">{title}</span>
                        <input
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            required

                        //className={`pofile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}

                        />
                        {/* </label><span className="profile__error">{error}</span> */}

                    </>
           }
                </>
          )    
