import React from "react";

const ConfirmationModal = ({ message, onClose, isError }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 max-w-sm shadow-lg space-y-4">
        <h2 className={`text-xl font-semibold ${isError ? "text-red-600" : "text-green-600"}`}>
          {isError ? "Error" : "Success"}
        </h2>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
