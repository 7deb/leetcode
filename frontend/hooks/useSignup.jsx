import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const signup = async ({ username, email, password, confirmPassword }) => {
        const success = handleInputErrors({ username, email, password, confirmPassword });
        if (!success) return;

        setLoading(true);
        setErrors({});
        try {
            const res = await fetch("http://localhost:4000/api/auth/signup", { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, confirmedPassword: confirmPassword }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                setErrors({ server: errorData.error || "Signup failed" });
                throw new Error(errorData.error || "Signup failed");
            }
    
            const data = await res.json();
            console.log(data); 
            // localStorage.setItem("chat-app", JSON.stringify(data));
            // setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, errors, signup };
};

export default useSignup; 

function handleInputErrors({ username, email, password, confirmPassword }) {
    if (!username || !email || !password || !confirmPassword) {
        toast.error("Please fill in all the fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    return true;
}
