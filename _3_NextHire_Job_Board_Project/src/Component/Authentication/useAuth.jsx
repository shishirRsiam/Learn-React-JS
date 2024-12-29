import { useState, useEffect } from "react";

function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/auth/", {
                    method: "POST",
                    headers: {
                        Authorization: `${localStorage.getItem("authToken")}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Response data from app:", data);

                setAuthenticated(true);
                setUser(data); // Set the user data received from the API
            } catch (error) {
                console.log("Error fetching user:", error);
                setAuthenticated(false);
            }
        };

        fetchUser();
    }, []);

    console.log("User ->:", user);
    console.log("Authenticated ->:", authenticated);

    return { authenticated, user };
}

export default useAuth;
