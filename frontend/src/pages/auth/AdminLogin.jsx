import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";


const AdminLogin = () => {
return (
<div className="auth-container">
<div className="auth-box">
<h2>Administrator Login</h2>
<p>Only authorized admins can access</p>


<form>
<input type="email" placeholder="Admin email" />
<input type="password" placeholder="Password" />
<button type="submit">Sign In</button>
</form>


<div className="links" style={{ justifyContent: "center" }}>
<Link to="/">Back to Student Login</Link>
</div>
</div>
</div>
);
};


export default AdminLogin;