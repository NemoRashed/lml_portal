"use client";

import { useState } from "react";
import Image from "next/image";

const Create = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className=" flex justify-center items-center ">
      <button onClick={toggleForm}>{props.imageComponent}</button>
      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl mb-4">Add Service</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Service Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Image" className="block text-gray-700">
                  Image
                </label>
                <input
                  type="file"
                  id="Image"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Image"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
