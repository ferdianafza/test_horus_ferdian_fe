"use client"
import { useState } from "react";
import Link from "next/link";
import EmployeeForm from "@/components/Employe/EmployeeForm";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleModal}
          className="bg-slate-100 text-color-primary font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-offset-2"
        >
          Create Employee
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed bg-slate-100 w-full h-full solid inset-0 flex items-center justify-center z-50">
          <div className="bg-accent rounded-lg p-6 solid shadow-lg max-w-md mx-auto z-50">
            <EmployeeForm />
            <button
              onClick={toggleModal}
              className="bg-slate-100 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-color-primary-dark focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-offset-2 mt-4"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
