import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Register from "@/components/Register";
import MainApi from "@/utils/MainApi";
import { setToken } from "@/utils/index";
import { CurrentUserDispatchContext } from "../../currentUserContext";

async function getUserId(username, email, password) {
    try {
        console.log(username, email, password, 'k2');
        const res = await MainApi.registration(username, email, password)
        return res;
    } catch (err) {
        console.error(`Ошибка при регистрации ${err}`)
    }
}

export function SignupPage() {
    const navigate = useNavigate();
    const dispatch = useContext(CurrentUserDispatchContext);

    const handleLogin = (email, password) => {
        setToken(email, password)
            .then((token) => MainApi.getUserData(token))
            .then((res) => { dispatch({ type: "loggedIn", _id: res._id, name: res.name, email: res.email }) })
    }

    const onRegister = (username, email, password) => {
        getUserId(username, email, password)
            .then(({ email }) => { handleLogin(email, password) })
            .then(() => { navigate("/movies"); window.scrollTo(0, 0) })
            .catch((err) => console.error(`Ошибка при регистрации ${err}`));
    }

    // try {

    // } catch (err) {
    //     console.error(`Ошибка при регистрации ${err}`)
    // }

    return (
        <Register
            onRegister={onRegister}
        />
    )
}

export default SignupPage;
