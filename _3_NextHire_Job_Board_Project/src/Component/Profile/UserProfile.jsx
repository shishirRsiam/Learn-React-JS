import React, { useState } from "react";
import { motion } from "framer-motion";
// import defaultProfilePic from "./default-profile-pic.png"; // Add an anonymous profile picture here

const UserProfile = (props) => {
    const defaultProfilePic = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
    const [jobsApplied, setJobsApplied] = useState([
        { id: 1, title: "Frontend Developer", company: "TechCorp", date: "2024-12-01", status: "In Progress" },
        { id: 2, title: "Backend Engineer", company: "Innovatech", date: "2024-11-15", status: "Rejected" },
        { id: 3, title: "Fullstack Developer", company: "Webify", date: "2024-10-20", status: "Accepted" },
    ]);

    const [notifications, setNotifications] = useState([
        { id: 1, message: "Your application for Frontend Developer is under review.", time: "2 hours ago" },
        { id: 2, message: "Backend Engineer application was rejected.", time: "1 day ago" },
    ]);

    const user = props.user;

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
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Jobs Applied</h2>
                    {jobsApplied.length > 0 ? (
                        <div className="space-y-4">
                            {jobsApplied.map((job) => (
                                <motion.div
                                    key={job.id}
                                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    initial={{ x: -100 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                                        <p className="text-sm text-gray-600">{job.company}</p>
                                        <p className="text-xs text-gray-500 mt-1">Applied on: {job.date}</p>
                                    </div>
                                    <p
                                        className={`text-sm px-3 py-1 rounded-full shadow-sm ${{
                                            Accepted: "bg-green-100 text-green-600",
                                            Rejected: "bg-red-100 text-red-600",
                                            "In Progress": "bg-yellow-100 text-yellow-600",
                                        }[job.status]}`}
                                    >
                                        {job.status}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No jobs applied yet.</p>
                    )}
                </motion.div>

                {/* Notifications Section */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
                    {notifications.length > 0 ? (
                        <ul className="space-y-4">
                            {notifications.map((notification) => (
                                <motion.li
                                    key={notification.id}
                                    className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    initial={{ y: 50 }}
                                    animate={{ y: 0 }}
                                    transition={{ type: "spring", stiffness: 75 }}>
                                    <p className="text-sm text-gray-700">{notification.message}</p>
                                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                </motion.li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">You have no new notifications.</p>
                    )}
                </motion.div>

                {/* Skills and Interests Section */}
                <motion.div
                    className="mb-10"
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

                {/* Edit Profile Button */}
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">Edit Profile</button>
                </div>
            </motion.div>
        </div>
    );
};

export default UserProfile;
