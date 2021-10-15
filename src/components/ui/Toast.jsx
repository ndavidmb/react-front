import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import useTimeout from "../../hooks/useTimeout";

export const Toast = ({ message, type }) => {
  const [animation, setAnimation] = useState("fadeIn");
  const { toast, setToast } = useContext(AppContext);

  useTimeout(() => {
    setToast({ ...toast, visible: false });
  }, 4000);

  useTimeout(() => {
    setAnimation("fadeOut");
  }, 3000);

  return (
    <div
      className={`shadow-sm border animate__animated animate__${animation} position-alert alert alert-${type}`}
    >
      {message}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
