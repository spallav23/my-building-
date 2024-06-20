import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-6 w-full max-w-lg"
      >
        <button onClick={onClose} className=" top-2 right-2 text-gray-600 hover:text-gray-900">
          &times; close
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
