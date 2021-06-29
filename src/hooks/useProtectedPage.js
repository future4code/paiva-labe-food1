import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const UseProtectedPage = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            goToLogin(history)
        }
    })
}

export default UseProtectedPage