import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from 'react-router-dom';


const UserProfile = (props) => {
    const defaultProfilePic = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
    const jobsApplied = props.jobsApplied;

    // jobsApplied = props.jobsApplied;
    console.log(jobsApplied);
    console.log('props ->', props);

    const [notifications, setNotifications] = useState([
        { id: 1, message: "Your application for Frontend Developer is under review.", time: "2 hours ago" },
        { id: 2, message: "Backend Engineer application was rejected.", time: "1 day ago" },
    ]);

    const user = props.user;
    useEffect(() => {
        console.log('user ->', user);
        // setJobsApplied(props.jobsApplied);
        console.log('jobsApplied ->', jobsApplied);
    }, [])

    return (
        <div className="flex justify-center items-start  min-h-screen bg-gray-100 py-10 px-4">
            <motion.div
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl border border-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>

                {/* Profile Section */}
                <div className="mb-10 bg-white shadow-lg rounded-lg p-8 flex items-center sp">
                    {/* Profile Picture */}
                    <div className="flex-shrink-0">
                        <div className="relative inline-block">
                            <img
                                src={user.profilePic || defaultProfilePic}
                                alt="Profile"
                                className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 "
                            />
                            <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                    </div>

                    {/* User Details */}
                    <motion.div className="ml-10 flex-grow">
                        <h1 className="text-3xl font-extrabold text-gray-800">
                            {user.user.first_name} {user.user.last_name}
                        </h1>
                        <p className="text-md font-medium text-gray-500 italic">{user.role}</p>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{user.bio}</p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-4 text-sm">
                            <p className="flex text-lg items-center gap-2">
                                <span className="font-semibold text-gray-700">Username:</span>
                                <span className="text-gray-600">{user.user.username}</span>
                            </p>
                            <p className="flex text-lg items-center gap-2">
                                <span className="font-semibold text-gray-700">Email:</span>
                                <span className="text-blue-600 underline">{user.user.email}</span>
                            </p>
                        </div>
                        <p className="flex items-center gap-2 mt-2">
                            <span className="font-semibold text-gray-700">Joined:</span>
                            <span className="text-gray-600">{new Date(user.created_at).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})} - {new Date(user.created_at).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        </p>
                        {/* Skills and Interests Section */}
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.6 }}>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Skills and Interests</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "React", 
                                    "Django", 
                                    "JavaScript", 
                                    "Tailwind CSS", 
                                    "Problem Solving"
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <div className="mt-6">
                            <button className="px-6 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
                                Edit Profile
                            </button>
                        </div>
                    </motion.div>
                </div>


                {/* Jobs Applied Section */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}>
                    <motion.div
                        className="mb-4 flex justify-between items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}>
                        <h2 className="text-xl font-bold text-gray-800">Jobs Applied</h2>
                        <h2 className="text-xl font-bold text-gray-800">Total Applied: {jobsApplied.length}</h2>
                    </motion.div>

                    {jobsApplied.length > 0 ? (
                        <div className="space-y-4">
                            {jobsApplied.map((job) => (
                                <motion.div
                                    key={job.job.id}
                                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    initial={{ x: -100 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{job.job.title}</h3>
                                        <p className="text-sm text-gray-600">Salary: {job.job.salary} </p> 
                                        <p className="text-sm text-gray-600">Company: {job.job.company} </p> 
                                        <p className="text-sm text-gray-600"> Location: {job.job.location} </p> 
                                        <p className="text-xs text-gray-500 mt-1">Applied on: {new Date(job.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(job.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                    </div>
                                    <Link to={`/job/${job.job.id + 1552004}/`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                                        View Details
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No jobs applied yet.</p>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default UserProfile;
