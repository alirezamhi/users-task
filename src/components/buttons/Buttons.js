import React from "react";

const Buttons = (props) => {
  const { clickHander, children, className, disabled } = props;
  return (
    <button
      type="buttton"
      className={className}
      onClick={clickHander}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Buttons;
