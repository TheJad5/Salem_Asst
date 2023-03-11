import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [conpass, setConPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !pass || !conpass) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (
      pass.length < 7 ||
      !/[A-Z]/.test(pass) ||
      !/\d/.test(pass) ||
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pass)
    ) {
      setError(
        "Password should be at least 7 characters with 1 capital letter, 1 number, and one special character."
      );
      return;
    }

    if (pass !== conpass) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="auth-form-container">
        <h2>Registration Complete!</h2>
        <p>You are now registered and logged in.</p>
        <Link to="/">Go to homepage</Link>
      </div>
    );
  }

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Full Name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={conpass}
          onChange={(e) => setConPass(e.target.value)}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}