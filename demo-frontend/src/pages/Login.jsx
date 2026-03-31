import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data);
      alert("Login Successful!");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;