import React, { useState } from "react";

const InputValidation = () => {
  const [info, setInfo] = useState({
    userName: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!info.userName.trim()) {
      setInfo((prev) => {
        return { ...prev, usernameError: "Username is required" };
      });
    } else {
      setInfo((prev) => {
        return { ...prev, usernameError: "" };
      });
    }

    if (!info.email.trim()) {
      setInfo((prev) => {
        return { ...prev, emailError: "Email is required" };
      });
    } else if (!emailPattern.test(info.email)) {
      setInfo((prev) => {
        return { ...prev, emailError: "Email is not valid" };
      });
    } else {
      setInfo((prev) => {
        return { ...prev, emailError: "" };
      });
    }

    if (!info.password.trim()) {
      setInfo((prev) => {
        return { ...prev, passwordError: "Password is required" };
      });
    } else if (!passwordPattern.test(info.password)) {
      setInfo((prev) => {
        return {
          ...prev,
          passwordError:
            "Password must be at least 6 characters long and contain at least one letter and one number",
        };
      });
    } else {
      setInfo((prev) => {
        return { ...prev, passwordError: "" };
      });
    }
  };

  console.log(info);

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <label htmlFor="userName"> Username </label>
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Username"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      {info.usernameError && <p>{info.usernameError}</p>}
      <label htmlFor="email"> Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      {info.emailError && <p>{info.emailError}</p>}
      <label htmlFor="password"> Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      {info.passwordError && <p>{info.passwordError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputValidation;
