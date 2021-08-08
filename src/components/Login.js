import React from "react";

const Login = ({ user, setUser }) => {
  return (
    <div>
      <div>Login Here</div>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(user) => setUser(user)}
      />
    </div>
  );
};

export default Login;
