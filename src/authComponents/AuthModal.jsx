import { useState } from "react";

export default function AuthModal({ onClose, onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  // Helper to get users array from localStorage
  const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

  // Helper to save users array to localStorage
  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login
      const users = getUsers();
      const user = users.find(
        (u) => u.username === form.username && u.password === form.password
      );

      if (user) {
        onAuth(user);
        onClose();
      } else {
        setError("Invalid credentials");
      }
    } else {
      // Signup
      const users = getUsers();
      const exists = users.some((u) => u.username === form.username);
      if (exists) {
        setError("Username already exists");
        return;
      }
      // Create new user
      const newUser = { username: form.username, password: form.password };
      users.push(newUser);
      saveUsers(users);
      setSignupSuccess(true);
      setIsLogin(true); // Switch to login form
      setForm({ username: "", password: "" }); // Clear form
      setError("");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-underlay" onClick={onClose} />
      <div className="modal-content">
        <button style={{ alignSelf: "flex-end" }} onClick={onClose}>
          ✖
        </button>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {signupSuccess && isLogin && (
          <p style={{ color: "green" }}>
            Signup successful! Please log in with your new credentials.
          </p>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
