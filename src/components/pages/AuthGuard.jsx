import React from "react";
import { HomeRouter } from "../../router/HomeRouter";
import { Login } from "./Login";


export const AuthGuard = () => {
  const validateAuth = () => {
    const auth = localStorage.getItem("token");
    return !!auth;
  };

  return <>{validateAuth() ? <HomeRouter /> : <Login />}</>;
};
