import React, { useState, useEffect } from "react";
import LoadingPage from "../Authentication/LoadingPage";
import API from "../Authentication/API";
import UserProfile from "./UserProfile";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/profile/", {
                method: "POST",
                headers: {
                    "Authorization": `${localStorage.getItem("authToken")}`, // Fixed header
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log("Response data:", data);
        
            setUser(data); // Assuming you want to set the received user data
            setLoading(false);
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };

    useEffect(() => {

        fetchUser();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <UserProfile user={user} />
            )}
        </>
    );
};

export default ProfilePage;