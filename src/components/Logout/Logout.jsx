import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    CurrentUserDispatchContext,
} from "../../currentUserContext";

export function Logout({ }) {
    const dispatch = useContext(CurrentUserDispatchContext);
    const navigate = useNavigate()

    useEffect(() => {
        window.localStorage.removeItem('jwt');
        dispatch({ type: "loggedOut" });
        navigate('/');
    }, [])
    return null
};

export default Logout;
