import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Password validation
    if (form.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser(form);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            style={styles.input}
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* 🔐 Password Field */}
          <div style={styles.passwordBox}>
            <input
              style={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* 🔐 Confirm Password */}
          <input
            style={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <select
            style={styles.input}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button style={styles.button}>Register</button>
        </form>

        <p style={styles.text}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  passwordBox: {
    display: "flex",
    alignItems: "center"
  },
  eyeBtn: {
    marginLeft: "10px",
    padding: "8px",
    cursor: "pointer"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#764ba2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  text: {
    textAlign: "center",
    marginTop: "10px"
  }
};

export default Register;