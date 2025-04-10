import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

function JobList({ refreshFlag, refresh }) {
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://student-job-tracker-backend-fzaq.onrender.com/api/jobs"
    );
    setJobs(response.data);
  };

  useEffect(() => {
    getData();
  }, [refreshFlag]);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} refresh={refresh} />
      ))}
    </div>
  );
}

export default JobList;
