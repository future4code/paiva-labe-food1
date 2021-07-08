import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../routes/coordinator";

export const UseUnprotectedPage = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            goToFeed(history)
        }
    })
}

export default UseUnprotectedPage