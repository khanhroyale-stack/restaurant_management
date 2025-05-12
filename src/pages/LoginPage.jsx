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

        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        setMessage("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      console.log(error);
      setMessage("Đã xảy ra lỗi khi đăng nhập!");
    }
  };


  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100 bg-gradient">
      <div className="login-box p-4 rounded shadow-lg text-dark bg-white" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center fw-bold">Login</h2>
        {message && <p className="text-danger text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              value={username} 
              placeholder="Type your username"
              onChange={(e) => setUsername(e.target.value)} 
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
              placeholder="Type your password"
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="justify-content-between mb-3">
            <button type="submit" className="btn btn-primary w-100 transition-btn">Login</button>
            <button type="button" className="btn btn-secondary w-100 mt-1 transition-btn" onClick={handleReturn}>
              Return
            </button>
          </div>
        </form>

        <p className="text-center">Or Sign Up Using</p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button className="btn btn-outline-secondary rounded-circle transition-btn">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="btn btn-outline-secondary rounded-circle transition-btn">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="btn btn-outline-secondary rounded-circle transition-btn">
            <i className="fab fa-google"></i>
          </button>
        </div>
        <p className="text-center">
          Or Sign Up Using <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
