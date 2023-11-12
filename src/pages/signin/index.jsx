import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import Login from "@/components/Login";
import MainApi from "@/utils/MainApi";
import { setToken } from "@/utils/index";
import { CurrentUserDispatchContext } from "../../currentUserContext";

export function SigninPage() {
    const navigate = useNavigate();
    const dispatch = useContext(CurrentUserDispatchContext);

    const handleLogin = (email, password) => {
        setToken(email, password)
            .then((token) => MainApi.getUserData(token))
            .then((res) => { dispatch({ type: "loggedIn", _id: res._id, name: res.name, email: res.email }) })
            .then(() => { navigate("/movies"); window.scrollTo(0, 0) })
    }

    return (
        <Login
            handleLogin={handleLogin}
        />
    )
}

export default SigninPage;

// const search = JSON.parse(localStorage.jwt);
// localStorage.setItem('jwt', res.token)
// return res.token;         .then((res) => localStorage.setItem('jwt', res.token))