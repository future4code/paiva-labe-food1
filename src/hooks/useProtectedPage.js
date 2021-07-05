import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

export const UseProtectedPage = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        const hasAddress = JSON.parse(localStorage.getItem("hasAddress"));

        if (!token && !hasAddress) {
            goToLogin(history);
        } else if (token && !hasAddress) {
            goToLogin(history);
        }
    })
}

export default UseProtectedPage