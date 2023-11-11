import { useContext, useEffect } from "react";
import {
    CurrentUserDispatchContext,
} from "../../currentUserContext";
import { useNavigate } from "react-router-dom";

export function Logout({ }) {
    const dispatch = useContext(CurrentUserDispatchContext);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: "loggedOut" });
        navigate('/');
    }, [])
    return null
};

export default Logout;
