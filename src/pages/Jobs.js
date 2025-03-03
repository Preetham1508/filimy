// import React, { useEffect, useState, useContext } from 'react';
// import { logincontext } from "../contexts/Logincontext";
// import axios from 'axios';
// import "./Connections.css";

// const Jobs = () => {
//   const [currentuser] = useContext(logincontext);
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedIndex, setExpandedIndex] = useState(null); // Track the index of the expanded card

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.post('http://127.0.0.1:5000/jobrec', {
//           params: { email: currentuser.email }
//         });
//         const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
//         console.log("Raw response data:", response.data);
//         const formattedData = data.map(profile => ({
//           companyName: profile.company_name,
//           role: profile.role,
//           jobDescription: profile.job_description,
//           experienceRequired: profile.experience_required,
//           jobPostingDate: profile.job_posting_date,
//           applicationDeadline: profile.application_deadline,
//           location: profile.location,
//         }));
//         console.log("Formatted profiles:", formattedData);
//         setProfiles(formattedData);
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, [currentuser.email]);

//   const toggleDetails = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded index
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading job profiles...</p>
//       </div>
//     );
//   }

//   if (error) return <div>{error}</div>;

//   return (
//     <div className="connections-container">
//       {/* Heading for the connections page */}
//       <h1 className="connections-heading">Recommended Jobs</h1>
//     <div className="profile-cards">
//       {profiles && profiles.length > 0 ? profiles.map((profile, index) => (
//         <div key={profile._id} className="profile-card" onClick={() => toggleDetails(index)}>
//           <h2>{profile.companyName}</h2>
//           <p><strong>Role:</strong> {profile.role}</p>
//           <p><strong>Location:</strong> {profile.location}</p>
          
//           {/* Display only brief information initially */}
//           <p><strong>Experience Required:</strong> {profile.experienceRequired}</p>
          
//           {/* Expand to show full job details when clicked */}
//           {expandedIndex === index && (
//             <>
//               <div>
//                 <h3>Job Description:</h3>
//                 <p>{profile.jobDescription}</p>
//               </div>

//               <div>
//                 <p><strong>Job Posting Date:</strong> {profile.jobPostingDate}</p>
//                 <p><strong>Application Deadline:</strong> {profile.applicationDeadline}</p>
//               </div>
//             </>
//           )}
//         </div>
//       )) : <div>No profiles found.</div>}
//     </div>
//     </div>
//   );
// };

// export default Jobs;

import React, { useEffect, useState, useContext } from 'react';
import { logincontext } from "../contexts/Logincontext";
import axios from 'axios';
import "./Connections.css";

const Jobs = () => {
  const [currentuser] = useContext(logincontext);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);



  
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/jobrec', {
          params: { email: currentuser.email }
        });
        const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
        console.log("Raw response data:", response.data);
        const formattedData = data.map(profile => ({
          companyName: profile.company_name,
          role: profile.role,
          jobDescription: profile.job_description,
          experienceRequired: profile.experience_required,
          jobPostingDate: profile.job_posting_date,
          applicationDeadline: profile.application_deadline,
          location: profile.location,
        }));
        console.log("Formatted profiles:", formattedData);
        setProfiles(formattedData);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [currentuser.email]);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  // const applyForJob = async (job) => {

  //   //const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  //   //const jobId = job?._id?.toString();
  //   // const userId = LoggedInUser?._id?.toString();
  //   // console.log(job.JSON)


  //   // if ( userId) {
  //   //   alert("User is not logged in.");
  //   //   return;
  //   // }

    
  //     const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  //     const email = LoggedInUser?.email; // Get the user's email
  //     const jobId = job?._id?.toString(); // Convert job ID to string
    
  //     if (!email) {
  //       alert("User is not logged in.");
  //       return;
  //     }
    
  //     try {
  //       const response = await axios.post("http://127.0.0.1:5000/applyjob", {
  //         params: { email: email,
  //         company: job.companyName,
  //         role: job.role}
  //       });
    
  //       console.log(response.data);
  //       alert(response.data.message);
  //     } catch (error) {
  //       console.error("Error applying for job:", error.response?.data || error.message);
  //       alert("Failed to apply for job");
  //     }
  //   };


  const applyForJob = async (job) => {
    const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    const email = LoggedInUser?.email;

    if (!email) {
      alert("User is not logged in.");
      return;
    }

    const payload = {
      email: email,
      company: job.companyName,
      role: job.role
    };

    console.log("Payload being sent:", payload); // Log data before sending

    try {
      const response = await axios.post(`http://127.0.0.1:5000/applyjob`, payload, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("Server Response:", response.data);
      alert(response.data.message);
      
    } catch (error) {
      console.error("Error applying for job:", error.response?.data || error.message);
      alert("Failed to apply for job");
    }
  };


  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading job profiles...</p>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="jobs-container">
      {/* Left Section - Recommended Jobs */}
      <div className="jobs-section">
        <h1 className="section-heading">Recommended Jobs</h1>
        <div className="profile-cards">
          {profiles && profiles.length > 0 ? profiles.map((profile, index) => (
            <div key={index} className="profile-card" onClick={() => toggleDetails(index)}>
              <h2>{profile.companyName}</h2>
              <p><strong>Role:</strong> {profile.role}</p>
              <p><strong>Location:</strong> {profile.location}</p>
              <p><strong>Experience Required:</strong> {profile.experienceRequired}</p>
              
              {expandedIndex === index && (
                <>
                  <div>
                    <h3>Job Description:</h3>
                    <p>{profile.jobDescription}</p>
                  </div>

<<<<<<< HEAD
                  <div>
                    <p><strong>Job Posting Date:</strong> {profile.jobPostingDate}</p>
                    <p><strong>Application Deadline:</strong> {profile.applicationDeadline}</p>
                  </div>
                </>
              )}
            </div>
          )) : <div>No profiles found.</div>}
=======
              <div>
                <p><strong>Job Posting Date:</strong> {profile.jobPostingDate}</p>
                <p><strong>Application Deadline:</strong> {profile.applicationDeadline}</p>
              </div>
              <button onClick={() => applyForJob(profile)}className="apply-button" > Apply </button>
                   
            </>
          )}
>>>>>>> 65f44b60eeb66b5248a72ef2520a185601802f5e
        </div>
      </div>

      {/* Right Section - Jobs Online */}
      <div className="jobs-section">
        <h1 className="section-heading">Jobs Online</h1>
        {/* Content for this section will be added later */}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Jobs;
=======
export default Jobs;


// import React, { useEffect, useState, useContext } from 'react';
// import { logincontext } from "../contexts/Logincontext";
// import axios from 'axios';
// import "./Connections.css";

// const Jobs = () => {
//   const [currentuser] = useContext(logincontext) || [{}]; // Ensure safe access
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded card index

//   // Fetch job profiles based on logged-in user's email
//   useEffect(() => {
//     if (!currentuser || !currentuser.email) return; // Prevent API call if user not available

//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.post('http://127.0.0.1:5000/jobrec', {
//           email: currentuser.email
//         });

//         const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
//         console.log("Raw response data:", response.data);

//         const formattedData = data.map(profile => ({
//           _id: profile._id, // Ensure _id exists
//           companyName: profile.company_name,
//           role: profile.role,
//           jobDescription: profile.job_description,
//           experienceRequired: profile.experience_required,
//           jobPostingDate: profile.job_posting_date,
//           applicationDeadline: profile.application_deadline,
//           location: profile.location,
//         }));

//         console.log("Formatted profiles:", formattedData);
//         setProfiles(formattedData);
//       } catch (err) {
//         setError('Failed to fetch job profiles');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, [currentuser?.email]); // Safe dependency

//   // Toggle job details
//   const toggleDetails = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   // Apply for a job
//   const applyForJob = async (job) => {
//     const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
//     const email = LoggedInUser?.email;

//     if (!email) {
//       alert("User is not logged in.");
//       return;
//     }

//     const payload = {
//       email: email,
//       company: job.companyName,
//       role: job.role
//     };

//     console.log("Payload being sent:", payload); // Log data before sending

//     try {
//       const response = await axios.post(`http://127.0.0.1:5000/applyjob/${email}`, payload, {
//         headers: { "Content-Type": "application/json" }
//       });

//       console.log("Server Response:", response.data);
//       alert(response.data.message);
      
//     } catch (error) {
//       console.error("Error applying for job:", error.response?.data || error.message);
//       alert("Failed to apply for job");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="spinner"></div>
//         <p>Loading job profiles...</p>
//       </div>
//     );
//   }

//   if (error) return <div>{error}</div>;

//   return (
//     <div className="connections-container">
//       <h1 className="connections-heading">Recommended Jobs</h1>
//       <div className="profile-cards">
//         {profiles.length > 0 ? profiles.map((profile, index) => (
//           <div key={profile._id || index} className="profile-card" onClick={() => toggleDetails(index)}>
//             <h2>{profile.companyName}</h2>
//             <p><strong>Role:</strong> {profile.role}</p>
//             <p><strong>Location:</strong> {profile.location}</p>
//             <p><strong>Experience Required:</strong> {profile.experienceRequired}</p>

//             {expandedIndex === index && (
//               <>
//                 <div>
//                   <h3>Job Description:</h3>
//                   <p>{profile.jobDescription}</p>
//                 </div>

//                 <div>
//                   <p><strong>Job Posting Date:</strong> {profile.jobPostingDate}</p>
//                   <p><strong>Application Deadline:</strong> {profile.applicationDeadline}</p>
//                 </div>

//                 <button onClick={() => applyForJob(profile)} className="apply-button">
//                   Apply
//                 </button>
//               </>
//             )}
//           </div>
//         )) : <div>No job profiles found.</div>}
//       </div>
//     </div>
//   );
// };

// export default Jobs;
>>>>>>> 65f44b60eeb66b5248a72ef2520a185601802f5e
