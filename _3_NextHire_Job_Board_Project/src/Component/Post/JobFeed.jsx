import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import API from "../Authentication/API";
import JobComponent from "./JobComponent";
import LoadingPage from "../Authentication/LoadingPage";


const JobFeed = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]); 
  

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API.AddPostAPI}`);
      const data = await response.json();
      setJobs(data.job_posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    
  
    fetchPosts();
  
    return () => {
    };
  }, []);
  

  return (

    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 mb-8">Job Feed</h1>

        {loading && <LoadingPage />}

        {jobs.length && <div className="space-y-8">
          {jobs.map((job) => (
            <JobComponent key={job.id} job={job} />
          ))}
        </div>}
        
      </div>
    </div>
  );
};

export default JobFeed;
