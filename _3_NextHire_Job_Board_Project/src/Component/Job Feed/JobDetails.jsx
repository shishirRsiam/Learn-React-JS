import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDescription = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    posted: "2 days ago",
    deadline: "3 days ago",
    description: `Are you looking for new opportunities in December 2024? No hassle!
Salary: 40k-70k per month + incentives.

Multiple Positions are available for Freshers, and Graduates can also apply.

110+ Vacancies Available.

Apply now: Comment 'YES' and like the post to get shortlisted within 24 hours.

Apply Here: WHATSAPP HR AFREEN: 7738238474.`,
    salary: "$70,000 - $90,000 per year",
    type: "Full-time",
  },
];

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const job = JobDescription.find((job) => job.id === parseInt(jobId));
    setJob(job);
  }, [jobId]);

  const handleShowApplicants = () => {
    alert("Applicants will be shown here! (Functionality not yet implemented)");
  };

  if (!job) {
    return <div className="text-center text-gray-600 mt-20">Job not found.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
          <h1 className="text-3xl font-extrabold">{job.title}</h1>
          <p className="text-sm mt-2">{job.company} • {job.location}</p>
          <p className="text-xs mt-1">Posted {job.posted} • Deadline: {job.deadline}</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Salary */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <span className="text-lg font-semibold text-pink-500">{job.salary}</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-3 whitespace-pre-line">{job.description}</p>
          </div>

          {/* Apply Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
              onClick={() => alert("Apply functionality coming soon!")} >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
