import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const {setAuthUser} = useAuthContext();


    const login = async ({ emailOrUsername, password }) => {
        const success = handleInputErrors({ emailOrUsername, password });
        if (!success) return;

        setLoading(true);
        setErrors({});
        try {
            const res = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ emailOrUsername, password })
            });
            const data = await res.json();
            if (res.ok) {
                // Handle successful login
                localStorage.setItem("Leetcode",JSON.stringify(data ));
                setAuthUser(data);
            } else {
                setErrors({ message: data.error });
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrors({ message: "An unexpected error occurred" });
        } finally {
            setLoading(false);
        }
    };

    return { loading, errors, login };
};

export default useLogin;

function handleInputErrors({ emailOrUsername, password }) {
    if (!emailOrUsername || !password) {
        toast.error("All fields are necessary");
        return false;
    }
    return true;
}
