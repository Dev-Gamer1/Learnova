import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";


const Register = () => {
return (
<div className="auth-container">
<div className="auth-box">
<h2>Create Student Account</h2>


<form>
<input type="text" placeholder="Full Name" />
<input type="email" placeholder="Email address" />
<input type="password" placeholder="Password" />
<button type="submit">Sign Up</button>
</form>


<div className="links" style={{ justifyContent: "center" }}>
<Link to="/">Already have an account? Login</Link>
</div>
</div>
</div>
);
};


export default Register;