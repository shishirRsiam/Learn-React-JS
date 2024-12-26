import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";  // Import motion from framer-motion

// Static Data (can be replaced by API data)
const jobFeedData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    posted: "2 days ago",
    description: "Looking for a frontend developer with experience in React.js and CSS."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Innovatech",
    location: "San Francisco, CA",
    posted: "1 week ago",
    description: "Seeking a backend engineer familiar with Python, Django, and PostgreSQL."
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Webify",
    location: "New York, NY",
    posted: "3 days ago",
    description: "We are looking for a fullstack developer with expertise in Node.js, Express, and React."
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataFlow",
    location: "Austin, TX",
    posted: "5 days ago",
    description: "Join our team as a Data Scientist. Knowledge of Python, Machine Learning, and AI is a must."
  },
];

const JobFeed = () => {
  const [jobs] = useState(jobFeedData); // Static data, replace with API if needed

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 mb-8">Job Feed</h1>

        {jobs.length > 0 ? (
          <div className="space-y-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }} // Initial state (invisible and below)
                animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and normal position
                transition={{ duration: 0.6 }}    // Duration of animation
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                    <p className="text-sm text-gray-500">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                  <p className="text-xs text-gray-400">Posted {job.posted}</p>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex justify-between items-center">
                  <Link to={`/job/${job.id}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                    View Details
                  </Link>
                  <p className="text-xs text-gray-500">Deadline {job.posted}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No job listings available.</p>
        )}
      </div>
    </div>
  );
};

export default JobFeed;
