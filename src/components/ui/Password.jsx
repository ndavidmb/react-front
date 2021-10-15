import React from "react";

export const Password = ({ label, placeholder, identifier }) => {
  const [hide, setHide] = React.useState(true);

  const changeHide = () => {
    setHide(!hide);
  };

  return (
    <div className="form-group">
      <label htmlFor={identifier} className="text-dark">
        {label}
      </label>
      <input
        type={hide ? "password" : "text"}
        name={identifier}
        id={identifier}
        className="form-control"
        placeholder={placeholder}
      />
      <span className="input-icon" onClick={changeHide}>
        <i className={hide ? "bi bi-eye" : "bi bi-eye-slash"}></i>
      </span>
    </div>
  );
};
