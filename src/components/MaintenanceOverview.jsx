import React from 'react';
import { motion } from 'framer-motion';

const MaintenanceOverview = ({ block, flatDetails }) => {
    
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold mb-4">Block {block}</h3>
      <div className="grid gap-4">
        {flatDetails.map((flat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-gray-100 rounded-lg shadow-inner"
          >
            <h4 className="text-lg font-semibold mb-2">Flat {flat.flatNumber}</h4>
            <p>Last Payment: {flat.lastPayment ? flat.lastPayment : 'No payment yet'}</p>
            <p className="mt-2">
              {flat.paid ? (
                <span className="text-green-500">Paid</span>
              ) : (
                <span className="text-red-500">Not Paid</span>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MaintenanceOverview;
