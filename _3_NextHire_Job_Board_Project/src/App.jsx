import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Component/Navbar/Navbar';
import FooterComponent from './Component/Footer/Footer';

import HomePage from './Component/Main/Main';
import LoginPage from './Component/Authentication/Login';
import RegisterPage from './Component/Authentication/Register';
import NotFoundPage from './Component/Authentication/NotFoundPage';
import ActivationPage from './Component/Authentication/AccountActivation';
import ProfilePage from './Component/Profile/Profile';
import LoadingPage from './Component/Authentication/LoadingPage';
import JobFeed from './Component/Post/JobFeed';
import JobDetails from './Component/Post/JobDetails';
import AddPostForm from './Component/Post/AddPostForm';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
          try {
              const response = await fetch("http://localhost:8000/api/auth/", {
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
              console.log("Response data from app:", data);
          
              setAuthenticated(true);
              setUser(data); // Assuming you want to set the received user data
          } catch (error) {
              console.log("Error fetching user:", error);
          }
      };
  
      useEffect(() => {
          fetchUser();
      }, []);


  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/register/" element={<RegisterPage />} />
        <Route path="/feed/" element={<JobFeed />} />
        <Route path="/job/:jobId/" element={<JobDetails />} />
        <Route path="/settings/" element={<LoadingPage />} />
        <Route path="/about/" element={<LoadingPage />} />
        <Route path="/profile/" element={<ProfilePage user={user} authenticated={authenticated} />} />
        <Route path="/add/post/" element={<AddPostForm />} />
        <Route path="/accounts/activate/:id/:token" element={<ActivationPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
