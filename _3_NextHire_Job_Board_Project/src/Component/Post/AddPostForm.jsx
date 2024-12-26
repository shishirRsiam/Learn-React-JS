import React, { useState } from "react";

const JobPostForm = ({ existingJob, onSubmit }) => {
  const [formData, setFormData] = useState(
    existingJob || {
      title: "Frontend Developer",
      description: "Looking for a frontend developer with experience in React.js and CSS.",
      company: "JS Company",
      location: "Lalmonirhat, Bangladesh",
      deadline: "2024-12-31",
      salary: "50000",
      type: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component or backend API
    if (onSubmit) onSubmit(formData);
    alert("Job saved successfully!");
    console.log('-> Form submitted with data:', formData);
    setFormData({
      title: "",
      company: "",
      location: "",
      posted: "",
      deadline: "",
      description: "",
      salary: "",
      type: "",
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {existingJob ? "Edit Job" : "Add New Job"}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter job title"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              rows="4"
              placeholder="Enter job description"
            ></textarea>
          </div>

    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-between">
      {/* Company */}
      <div className="w-full sm:w-1/2 mb-4">
        <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter company name"
        />
      </div>

      {/* Location */}
      <div className="w-full sm:w-1/2 mb-4">
        <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter job location (e.g. Remote, City, State)"
        />
      </div>
    </div>

          

          

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-between">
          <div className="w-full mb-4">
            <label htmlFor="salary" className="block text-gray-700 font-semibold">
              Salary
            </label>
            <input type="text" id="salary" name="salary"
              value={formData.salary} onChange={handleChange} required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter salary (e.g. $70,000 - $90,000 per year or Negotiable)"/>
          </div>

          
          {/* Job Type */}
          <div className="w-full mb-6">
            <label htmlFor="type" className="block text-gray-700 font-semibold">
              Job Type
            </label>
            <select id="type" name="type" value={formData.type}
              onChange={handleChange} required
              className="w-full border border-gray-300 rounded-md p-3 mt-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
          </div>

          {/* Deadline */}
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 font-semibold">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
              placeholder="Enter application deadline"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
          >
            {existingJob ? "Update Job" : "Add Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
