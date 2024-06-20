// import React from 'react';
// import { motion } from 'framer-motion';

// const MaintenanceOverview = ({ block, flatDetails }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//     >
//       <h3 className="text-xl font-bold mb-4">Block {block}</h3>
//       <div className="grid gap-4" >
//         {flatDetails.map((flat, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             className="p-4 bg-gray-100 rounded-lg shadow-inner"
//           >
//             <h4 className="text-lg font-semibold mb-2">Flat {flat.flatNumber}</h4>
//             <p>Owner: {flat.ownerName}</p>
//             <p>Type: {flat.flatType}</p>
//             <p>Rented: {flat.rented ? `Yes (to ${flat.rentedPersonName})` : 'No'}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default MaintenanceOverview;

import React from 'react';
import { motion } from 'framer-motion';

const MaintenanceOverview = ({ block, flatDetails, onFlatClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold mb-4">Block {block}</h3>
      <div className="grid gap-4">
        {flatDetails.map((flat) => (
          <motion.div
            key={flat._id}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-gray-100 rounded-lg shadow-inner cursor-pointer"
            onClick={() => onFlatClick(flat)}
          >
            <h4 className="text-lg font-semibold mb-2">Flat {flat.flatNumber}</h4>
            <p>Owner: {flat.ownerName}</p>
            <p>Type: {flat.flatType}</p>
            <p>Rented: {flat.rented ? `Yes (to ${flat.rentedPersonName})` : 'No'}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MaintenanceOverview;


