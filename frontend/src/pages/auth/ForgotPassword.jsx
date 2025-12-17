import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";


const ForgotPassword = () => {
return (
<div className="auth-container">
<div className="auth-box">
<h2>Forgot Password</h2>


<form>
<input type="email" placeholder="Enter your email" />
<button type="submit">Send Reset Link</button>
</form>


<div className="links" style={{ justifyContent: "center" }}>
<Link to="/">Back to Login</Link>
</div>
</div>
</div>
);
};


export default ForgotPassword;