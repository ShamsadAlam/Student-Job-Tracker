import React, { useState } from "react";
import axios from "axios";

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
    await axios.post("http://localhost:4000/api/jobs", formData);
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
    <form
      onSubmit={handleSubmit}
      className="mt-5 border-1 w-full flex justify-between p-6"
    >
      <input
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="border-1 p-2 outline-none rounded-sm overflow-hidden text-white"
      />
      <input
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="border-1 p-2 outline-none rounded-sm overflow-hidden text-white"
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        className="border-1 p-2 outline-none rounded-sm overflow-hidden text-white bg-[#242424]"
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
        className="border-1 p-2 outline-none rounded-sm overflow-hidden text-white"
      />
      <input
        placeholder="Link"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
        className="border-1 p-2 outline-none rounded-sm overflow-hidden text-white"
      />
      <button
        type="submit"
        className="cursor-pointer border-2 rounded-lg p-2 bg-gray-600 text-white hover:bg-gray-500"
      >
        Add Job
      </button>
    </form>
  );
}

export default JobForm;
