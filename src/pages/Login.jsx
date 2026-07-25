import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = JSON.parse(
      localStorage.getItem("flowpilot-account")
    );

    if (!account) {
      toast.error("No account found. Please register first.");
      return;
    }

    if (
      account.email !== form.email ||
      account.password !== form.password
    ) {
      toast.error("Invalid email or password");
      return;
    }

    login(account.email);

    toast.success("Welcome back!");

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>FlowPilot AI</h1>

        <h2>Welcome Back 👋</h2>

        <p>Login to continue.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="switch-auth">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;