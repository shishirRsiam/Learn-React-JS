import React, { useState } from "react";
import { motion } from "framer-motion"; 

const UserProfile = (props) => {
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
        <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
            <motion.div
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-6xl border border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                {/* Profile Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-800"> {user.user.first_name} {user.user.last_name} x {user.user.username}</h1>
                    <p className="text-sm text-gray-500">{user.role}</p>
                    <p className="text-gray-600 mt-2">{user.bio}</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <p>
                            <span className="font-semibold text-gray-700">Email:</span> {user.user.email}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-700">Joined:</span> {new Date(user.created_at).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})} - {new Date(user.created_at).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true })}
                        </p>
                    </div>
                </div>

                {/* Jobs Applied Section */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }} // Fade-in with delay
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Jobs Applied</h2>
                    {jobsApplied.length > 0 ? (
                        <div className="space-y-4">
                            {jobsApplied.map((job) => (
                                <motion.div
                                    key={job.id}
                                    className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                                    initial={{ x: -100 }}
                                    animate={{ x: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold">{job.title}</h3>
                                        <p className="text-sm text-gray-600">{job.company}</p>
                                        <p className="text-xs text-gray-500 mt-1">Applied on: {job.date}</p>
                                    </div>
                                    <p
                                        className={`text-sm px-3 py-1 rounded-full ${
                                            job.status === "Accepted"
                                                ? "bg-green-100 text-green-600"
                                                : job.status === "Rejected"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-yellow-100 text-yellow-600"
                                        }`}
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
                    transition={{ duration: 0.8, delay: 0.4 }} // Fade-in with delay
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
                    {notifications.length > 0 ? (
                        <ul className="space-y-4">
                            {notifications.map((notification) => (
                                <motion.li
                                    key={notification.id}
                                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                                    initial={{ y: 50 }}
                                    animate={{ y: 0 }}
                                    transition={{ type: "spring", stiffness: 75 }}
                                >
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
                    transition={{ duration: 0.9, delay: 0.6 }} // Fade-in with delay
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Skills and Interests</h2>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Django", "JavaScript", "Tailwind CSS", "Problem Solving"].map((skill) => (
                            <span
                                key={skill}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Edit Profile Button */}
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
                        Edit Profile
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default UserProfile;
