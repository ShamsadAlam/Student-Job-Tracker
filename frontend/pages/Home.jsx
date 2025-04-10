import React, { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

function Home() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="home">
      <h1>🎓 Student Job Tracker</h1>
      <JobForm refresh={refresh} />
      <JobList refreshFlag={refreshFlag} />
    </div>
  );
}

export default Home;
