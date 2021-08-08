import React from "react";

const Login = ({ user, setUser }) => {
  return (
    <div>
      <div>Login Here</div>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default Login;
