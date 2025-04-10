import React, { useEffect, useState } from "react";
import API from "../services/api";
import JobCard from "./JobCard";

function JobList({ refreshFlag }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, [refreshFlag]);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} refresh={() => {}} />
      ))}
    </div>
  );
}

export default JobList;
