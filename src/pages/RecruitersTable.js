// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './RecruitersTable.css';
// function RecruiterTable() {
//   const [recruiters, setRecruiters] = useState([]);

//   useEffect(() => {
//     fetchRecruiters();
//   }, []);

//   const fetchRecruiters = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/recruiters');
//       setRecruiters(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching recruiters:', error);
//     }
//   };

//   const handleAccept = async (id) => {
//     try {
//         console.log("HIiiiiiiiiii");
//       await axios.post(`http://127.0.0.1:5000/recruiters/${id}/accept`);
//       fetchRecruiters(); // Refresh the list after accepting
//     } catch (error) {
//       console.error('Error accepting recruiter:', error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:5000/recruiters/${id}`);
//       fetchRecruiters(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error rejecting recruiter:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Recruiters List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Company Name</th>
//             <th>Recruiter ID</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recruiters.map((recruiter) => (
//             <tr key={recruiter._id}>
//               <td>{recruiter.firstname} {recruiter.lastname}</td>
//               <td>{recruiter.company_name}</td>
//               <td>{recruiter.recruiter_id}</td>
//               <td>
//                 <button onClick={() => handleAccept(recruiter._id)}>Accept</button>
//                 <button onClick={() => handleReject(recruiter._id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default RecruiterTable;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UserJobDetails from "./UserJobDetails"; // Import renamed component
// import "./RecruitersTable.css";

// function RecruiterTable() {
//   const [recruiters, setRecruiters] = useState([]);
//   const [showUserJobDetails, setShowUserJobDetails] = useState(false);

//   useEffect(() => {
//     fetchRecruiters();
//   }, []);

//   const fetchRecruiters = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/recruiters");
//       setRecruiters(response.data);
//     } catch (error) {
//       console.error("Error fetching recruiters:", error);
//     }
//   };

//   const handleAccept = async (id) => {
//     try {
//       await axios.post(`http://127.0.0.1:5000/recruiters/${id}/accept`);
//       fetchRecruiters();
//     } catch (error) {
//       console.error("Error accepting recruiter:", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:5000/recruiters/${id}`);
//       fetchRecruiters();
//     } catch (error) {
//       console.error("Error rejecting recruiter:", error);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Navbar Section */}
//       <div className="navbar">
//         <h1>Recruiters List</h1>
//         <button className="jobs-applied-btn" onClick={() => setShowUserJobDetails(true)}>
//           Jobs Applied
//         </button>
//       </div>

//       {/* Recruiters Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Company Name</th>
//             <th>Recruiter ID</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recruiters.map((recruiter) => (
//             <tr key={recruiter._id}>
//               <td>{recruiter.firstname} {recruiter.lastname}</td>
//               <td>{recruiter.company_name}</td>
//               <td>{recruiter.recruiter_id}</td>
//               <td>
//                 <button onClick={() => handleAccept(recruiter._id)}>Accept</button>
//                 <button onClick={() => handleReject(recruiter._id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Show UserJobDetails Component when button is clicked */}
//       {showUserJobDetails && <UserJobDetails onClose={() => setShowUserJobDetails(false)} />}
//     </div>
//   );
// }

// export default RecruiterTable;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";
// import "./RecruitersTable.css";

// function RecruiterTable() {
//   const [recruiters, setRecruiters] = useState([]);
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     fetchRecruiters();
//   }, []);

//   const fetchRecruiters = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/recruiters");
//       setRecruiters(response.data);
//     } catch (error) {
//       console.error("Error fetching recruiters:", error);
//     }
//   };

//   const handleAccept = async (id) => {
//     try {
//       await axios.post(`http://127.0.0.1:5000/recruiters/${id}/accept`);
//       fetchRecruiters();
//     } catch (error) {
//       console.error("Error accepting recruiter:", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:5000/recruiters/${id}`);
//       fetchRecruiters();
//     } catch (error) {
//       console.error("Error rejecting recruiter:", error);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Navbar Section */}
//       <div className="navbar">
//         <h1>Recruiters List</h1>
//       </div>

//       {/* Separate Button Section */}
//       <div className="button-container">
//         <button className="jobs-applied-btn" onClick={() => navigate("/userjobdetails")}>
//           Jobs Applied
//         </button>
//       </div>

//       {/* Recruiters Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Company Name</th>
//             <th>Recruiter ID</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recruiters.map((recruiter) => (
//             <tr key={recruiter._id}>
//               <td>{recruiter.firstname} {recruiter.lastname}</td>
//               <td>{recruiter.company_name}</td>
//               <td>{recruiter.recruiter_id}</td>
//               <td>
//                 <button onClick={() => handleAccept(recruiter._id)}>Accept</button>
//                 <button onClick={() => handleReject(recruiter._id)}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default RecruiterTable;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./RecruitersTable.css";

function RecruiterTable() {
  const [recruiters, setRecruiters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect triggered for recruiters");
    fetchRecruiters();
  }, []);

  const fetchRecruiters = async () => {
    console.log("Fetching recruiters..."); // Debugging
    try {
      const response = await axios.get("http://127.0.0.1:5000/recruiters");
      console.log("Recruiters API Response:", response.data); // Debugging

      if (Array.isArray(response.data)) {
        setRecruiters(response.data);
      } else {
        console.error("Unexpected API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching recruiters:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
        console.log("HIiiiiiiiiii");
      await axios.post(`http://127.0.0.1:5000/recruiters/${id}/accept`);
      fetchRecruiters();
    } catch (error) {
      console.error("Error accepting recruiter:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/recruiters/${id}`);
      fetchRecruiters();
    } catch (error) {
      console.error("Error rejecting recruiter:", error);
    }
  };

  return (
    <div className="container">
      <h1>Recruiters List</h1>

      {/* Jobs Applied Button */}
      <div className="button-container">
        <button className="jobs-applied-btn" onClick={() => navigate("/userjobdetails")}>
          Jobs Applied
        </button>
      </div>

      {/* Recruiters Table */}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Company Name</th>
            <th>Recruiter ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.length > 0 ? (
            recruiters.map((recruiter) => (
              <tr key={recruiter._id}>
                <td>{recruiter.firstname} {recruiter.lastname}</td>
                <td>{recruiter.company_name}</td>
                <td>{recruiter.recruiter_id}</td>
                <td>
                  <button onClick={() => handleAccept(recruiter._id)}>Accept</button>
                  <button onClick={() => handleReject(recruiter._id)}>Reject</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No recruiters available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecruiterTable;