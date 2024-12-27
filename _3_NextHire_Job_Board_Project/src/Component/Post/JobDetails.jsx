import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Authentication/LoadingPage";
import NotFoundPage from "../Authentication/NotFoundPage";
import API from "../Authentication/API";
import { motion } from "framer-motion";  // Importing motion

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchJob = async () => {
    try {
      const response = await fetch(`${API.AddPostAPI}${jobId - 1552004}/`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      setLoading(false);
      setJob(data);
    } catch (error) {
      setError(true);
      console.error("Error fetching job:", error);
    }
  };
  const fetchApply = async () => {
    try {
      const response = await fetch(`${API.AddPostAPI}${jobId - 1552004}/apply/`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      setLoading(false);
      setJob(data);
    } catch (error) {
      setError(true);
      console.error("Error fetching job:", error);
    }
  }
  useEffect(() => {

    fetchJob();
  }, [jobId]);

  if (error) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-gray-200 py-12"
      initial={{ opacity: 0 }} // Initial state for the animation
      animate={{ opacity: 1 }} // End state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-extrabold">{job.title}</h1>
          <p className="text-sm mt-2">{job.company} • {job.location}</p>
          <p className="text-xs mt-1">Posted {job.posted} • Deadline: {job.deadline}</p>
        </motion.div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <span className="text-lg font-semibold text-pink-500">{job.salary}</span>
          </div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} >
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-3 whitespace-pre-line">{job.description}</p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <button
              className="w-full sm:w-auto bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
              onClick={() => alert("Apply functionality coming soon!")}>
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
