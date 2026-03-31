import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;