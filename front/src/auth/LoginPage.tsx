import React, { useState } from "react";
import { AuthForm } from "./Auth.components";

const LoginPage = () => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <AuthForm>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Username"
        value={username}
        onChange={(event) =>
          setCredentials({
            username: event.target.value,
            password,
          })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) =>
          setCredentials({
            username,
            password: event.target.value,
          })
        }
      />
      <button type="submit">Login</button>
    </AuthForm>
  );
};

export default LoginPage;
