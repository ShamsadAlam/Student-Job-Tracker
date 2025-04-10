import React, { useState } from "react";
import API from "../services/api";

function JobForm({ refresh }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", formData);
    setFormData({
      company: "",
      role: "",
      status: "Applied",
      appliedDate: "",
      link: "",
    });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <input
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        value={formData.appliedDate}
        onChange={(e) =>
          setFormData({ ...formData, appliedDate: e.target.value })
        }
      />
      <input
        placeholder="Link"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
