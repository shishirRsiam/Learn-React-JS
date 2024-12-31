import React, { useState } from "react";
import { motion } from "framer-motion";
import ResumeAndBioComponent from "./ResumeAndBioComponent";


const EditProfileModal = ({ isOpen, toggleModal, user }) => {
  const [skills, setSkills] = useState([
    {
        "id": 1,
        "name": "React",
        "created_at": "2024-12-31T00:30:57.482956+06:00",
        "updated_at": "2024-12-31T00:30:57.482977+06:00"
    },
    {
        "id": 2,
        "name": "C++",
        "created_at": "2024-12-31T22:10:02.874780+06:00",
        "updated_at": "2024-12-31T22:10:02.874794+06:00"
    },
    {
        "id": 3,
        "name": "Python",
        "created_at": "2024-12-31T22:10:07.861559+06:00",
        "updated_at": "2024-12-31T22:10:07.861577+06:00"
    },
    {
        "id": 4,
        "name": "DSA",
        "created_at": "2024-12-31T22:10:11.926220+06:00",
        "updated_at": "2024-12-31T22:10:11.926242+06:00"
    },
    {
        "id": 5,
        "name": "Problem Solver",
        "created_at": "2024-12-31T22:10:20.347529+06:00",
        "updated_at": "2024-12-31T22:10:20.347584+06:00"
    }
]);

  console.log("user Data: ->", user);

  const [newSkill, setNewSkill] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [resume, setResume] = useState(user.resume);
  const [bio, setBio] = useState(user.bio);

  const addSkill = (skill) => {
    if (skill.trim() && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill("");
      setSuggestions([]);
    }
  };
  const fetchUpdatedUserData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/update/profile/", {
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skills: skills,
          resume: resume,
          bio: bio,
        }),
      });
      if (!response.ok) {
        console.error("Failed to update user data");
      } 
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
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

  const handleSave = () => {
    console.log({ skills, resume, bio });
    fetchUpdatedUserData();
    alert("Profile saved successfully!");
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
          <button
            onClick={toggleModal}
            className="text-gray-500 font-bold text-2xl hover:text-gray-700 focus:outline-none">
            &times;
          </button>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          
        <ResumeAndBioComponent resume={resume} setResume={setResume} bio={bio} setBio={setBio} />

          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <div className="relative mb-4">
            <input type="text"
              value={newSkill}
              onChange={handleSkillChange}
              onKeyDown={handleKeyDown}
              placeholder="Add a skill"
              className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {suggestions.length > 0 || (newSkill.trim() && !skills.includes(newSkill)) ? (
              <ul className="absolute bg-white border rounded-lg shadow-lg mt-1 w-full z-10">
                {newSkill.trim() && !skills.includes(newSkill) && (
                  <li onClick={() => addSkill(newSkill)}
                    className="p-2 cursor-pointer bg-green-200 hover:bg-green-300 text-green-800 font-bold">
                    Create and Add: "{newSkill}"
                  </li>
                )}
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => selectSuggestion(suggestion)}
                    className="p-2 cursor-pointer hover:bg-gray-200">
                    {suggestion}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-200 p-2 rounded-lg">
                <input type="text" value={skill.name} readOnly
                  className="border-none bg-transparent focus:outline-none"/>
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-red-500 font-bold ml-2 hover:text-red-700">
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Save
          </button>
          <button onClick={toggleModal}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfileModal;