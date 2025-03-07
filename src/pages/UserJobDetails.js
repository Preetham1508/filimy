// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./UserJobDetails.css";

// function UserJobDetails({ onClose }) {
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   useEffect(() => {
//     fetchAppliedJobs();
//   }, []);

//   const fetchAppliedJobs = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/userappliedjobs");
//       setAppliedJobs(response.data);
//     } catch (error) {
//       console.error("Error fetching applied jobs:", error);
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-btn" onClick={onClose}>&times;</span>
//         <h2>User Job Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Company</th>
//               <th>Role</th>
//               <th>Applied By (Email)</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {appliedJobs.length > 0 ? (
//               appliedJobs.map((job, index) => (
//                 <tr key={index}>
//                   <td>{job.company}</td>
//                   <td>{job.role}</td>
//                   <td>{job.email}</td>
                
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No jobs applied yet.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default UserJobDetails;




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";
// import "./UserJobDetails.css";

// function UserJobDetails() {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     fetchAppliedJobs();
//   }, []);

//   const fetchAppliedJobs = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/applied_jobs");
//       setAppliedJobs(response.data);
//     } catch (error) {
//       console.error("Error fetching applied jobs:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <button className="back-btn" onClick={() => navigate("/recruiterslist")}>
//         ← Back to Recruiters
//       </button>

//       <h2>User Job Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Role</th>
//             <th>Applied By (Email)</th>
          
//           </tr>
//         </thead>
//         <tbody>
//           {appliedJobs.length > 0 ? (
//             appliedJobs.map((job, index) => (
//               <tr key={index}>
//                 <td>{job.company}</td>
//                 <td>{job.role}</td>
//                 <td>{job.email}</td>
               
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No jobs applied yet.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserJobDetails;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./UserJobDetails.css";

function UserJobDetails() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect triggered for applied jobs");
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    console.log("Fetching applied jobs...");
    try {
      const response = await axios.get("http://127.0.0.1:5000/applied_jobs");
      console.log("Applied Jobs API Response:", response.data);

      if (Array.isArray(response.data)) {
        setAppliedJobs(response.data);
      } else {
        console.error("Unexpected API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate("/recruiterslist")}>
        ← Back to Recruiters
      </button>

      <h2>User Job Details</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Applied By (Email)</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No jobs applied yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserJobDetails;