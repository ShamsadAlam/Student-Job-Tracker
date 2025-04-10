import React from "react";
import axios from "axios";

function JobCard({ job, refresh }) {
  const updateStatus = async (status) => {
    await axios.patch(
      `https://student-job-tracker-backend-fzaq.onrender.com/api/jobs/${job._id}`,
      { status }
    );
    refresh();
  };

  const deleteJob = async () => {
    await axios.delete(
      `https://student-job-tracker-backend-fzaq.onrender.com/api/jobs/${job._id}`
    );
    refresh();
  };

  return (
    <div className="border-none outline-none grid gap-8 grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8 w-[98vw] rounded-lg mt-4 bg-gray-800">
      <h3 className="max-w-sm overflow-hidden">
        {job.company} – {job.role}
      </h3>
      <p>Status: {job.status}</p>
      <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-12 text-blue-300"
      >
        Link
      </a>
      <div>
        <select
          onChange={(e) => updateStatus(e.target.value)}
          value={job.status}
          className="outline-none rounded-lg p-2 bg-gray-800 cursor-pointer"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button
          onClick={deleteJob}
          className="border-2 ml-14 p-2 rounded-lg cursor-pointer bg-gray-600 text-white hover:bg-gray-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
