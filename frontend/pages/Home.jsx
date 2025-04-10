import React, { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function Home() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="text-5xl mt-[2%]">🎓 Student Job Tracker</h1>
      <hr className=" border-gray-500 w-[100%] mt-5" />
      <JobForm refresh={refresh} />
      <hr className=" border-gray-500 w-[100%] mt-5" />
      <JobList refreshFlag={refreshFlag} refresh={refresh} />
    </div>
  );
}

export default Home;
