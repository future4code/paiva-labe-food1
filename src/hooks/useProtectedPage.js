import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAddressScreen } from "../routes/coordinator";

export const UseProtectedPage = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        const hasAddress = localStorage.getItem("hasAddress")
        if (!token && !hasAddress) {
            goToAddressScreen(history)
        }
    })
}

export default UseProtectedPage