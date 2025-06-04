import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(username, password);
      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.user));
        setMessage(result.message);
        navigate("/");
        setTimeout(() => window.location.reload(), 100);
      } else {
        setMessage("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      console.log(error);
      setMessage("Đã xảy ra lỗi khi đăng nhập!");
    }
  };

  const handleReturn = () => navigate("/");

  return (
    <div className="login-background d-flex align-items-center justify-content-center vh-100">
      <div className="login-card p-4 rounded shadow-lg bg-white text-dark" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center fw-bold mb-4 text-primary">Welcome Back</h3>

        {message && <div className="alert alert-danger text-center py-2">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2 animated-btn">Login</button>
          <button type="button" className="btn btn-outline-secondary w-100 animated-btn" onClick={handleReturn}>Return</button>
        </form>

        <hr />

        <div className="text-center mt-3">
          <p className="mb-2">Or sign in with</p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <button className="social-icon-btn social-facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-icon-btn social-twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-icon-btn social-google">
              <i className="fab fa-google"></i>
            </button>
          </div>
          <p className="mt-3">Don't have an account? <a href="/signup" className="text-primary">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
