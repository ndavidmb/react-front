import React from "react";

export const Container = (props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "35vw",
          left: "0",
        }}
        className="bg-primary bg-gradient"
      ></div>
      <div
        className="bg-light bg-gradient"
        style={{
          position: "absolute",
          height: "100vh",
          width: "65vw",
          right: "0",
        }}
      >
        <div
          id="login"
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="card shadow w-50 p-5"
        >
          {props.children}
        </div>
      </div>
    </>
  );
};
