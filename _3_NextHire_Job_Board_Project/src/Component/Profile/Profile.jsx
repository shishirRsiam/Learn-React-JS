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
            const userInfo = JSON.parse(localStorage.getItem("user"));
            console.log('***userInfo', userInfo);

            const response = await fetch(`${API.UserAPI}${userInfo.id}/`);
            const data = await response.json();
            console.log('data', data);
            setUser(data);
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