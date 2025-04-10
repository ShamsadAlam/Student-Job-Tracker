import React from "react";
import API from "../services/api";

function JobCard({ job, refresh }) {
  const updateStatus = async (status) => {
    await API.patch(`/jobs/${job._id}`, { status });
    refresh();
  };

  const deleteJob = async () => {
    await API.delete(`/jobs/${job._id}`);
    refresh();
  };

  return (
    <div className="job-card">
      <h3>
        {job.company} – {job.role}
      </h3>
      <p>Status: {job.status}</p>
      <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        Link
      </a>
      <div>
        <select
          onChange={(e) => updateStatus(e.target.value)}
          value={job.status}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button onClick={deleteJob}>Delete</button>
      </div>
    </div>
  );
}

export default JobCard;
