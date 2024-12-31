import React, { useState } from "react";
import { motion } from "framer-motion";

const EditProfileModal = ({ isOpen, toggleModal }) => {
  const [skills, setSkills] = useState([
    "React",
    "Django",
    "JavaScript",
    "Tailwind CSS",
    "Problem Solving",
    "HTML",
    "CSS",
    "Bootstrap",
    "Python",
    "Git",
    "Node.js",
    "TypeScript",
    "Redux",
    "Next.js",
    "REST APIs",
    "GraphQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "OOP Concepts",
    "C++",
    "Unit Testing",
    "Webpack",
    "AWS",
    "Docker",
    "Kubernetes",
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const addSkill = (skill) => {
    if (skill.trim() && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill("");
      setSuggestions([]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setNewSkill(value);

    if (value.trim()) {
      const filteredSuggestions = skills.filter(
        (skill) =>
          skill.toLowerCase().includes(value.toLowerCase()) && skill.toLowerCase() !== value.toLowerCase()
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(newSkill);
    }
  };

  const selectSuggestion = (suggestedSkill) => {
    addSkill(suggestedSkill);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button onClick={toggleModal} className="text-gray-500 font-bold text-2xl hover:text-gray-700 focus:outline-none">
            &times;
          </button>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="resume" className="block text-lg font-bold mb-2">
              Resume
            </label>
            <textarea
              id="resume"
              name="resume"
              rows="2"
              placeholder="Upload your resume Google Drive or other platform and enter your resume link here..."
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block text-lg font-bold mb-2">
              Bio
            </label>
            <textarea id="bio" name="bio" rows="3" placeholder="Enter your bio here..."
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          </div>

          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <div className="relative mb-4">
            <input type="text" value={newSkill} onChange={handleSkillChange} onKeyDown={handleKeyDown}
              placeholder="Add a skill"
              className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {suggestions.length > 0 || (newSkill.trim() && !skills.includes(newSkill)) ? (
              <ul className="absolute bg-white border rounded-lg shadow-lg mt-1 w-full z-10">
                {newSkill.trim() && !skills.includes(newSkill) && (
                  <li
                    onClick={() => addSkill(newSkill)}
                    className="p-2 cursor-pointer bg-green-200 hover:bg-green-300 text-green-800 font-bold"
                  >
                    Create and Add: "{newSkill}"
                  </li>
                )}
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => selectSuggestion(suggestion)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-200 p-2 rounded-lg">
                <input type="text" value={skill} readOnly className="border-none bg-transparent focus:outline-none" />
                <button onClick={() => removeSkill(skill)} className="text-red-500 font-bold ml-2 hover:text-red-700">
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Save
          </button>
          <button onClick={toggleModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfileModal;
