import React from 'react';

const EditProfileModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <button
            onClick={toggleModal}
            className="text-gray-500 font-bold text-2xl hover:text-gray-700"
          >
            X
          </button>
        </div>
        {/* Add your profile edit form here */}
        <div>
          <input
            type="text"
            placeholder="Edit your name"
            className="border p-2 w-full mb-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Edit your email"
            className="border p-2 w-full mb-4 rounded-lg"
          />
          <textarea
            placeholder="Edit your bio"
            className="border p-2 w-full mb-4 rounded-lg"
          ></textarea>
          <div className="flex justify-between gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Save
            </button>
            <button
              onClick={toggleModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
