import { useEffect } from "react";
import { getProfile } from "../services/api";

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    getProfile(token)
      .then(res => alert(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  return <h2>Dashboard</h2>;
}

export default Dashboard;