import React from "react";

// export const Modal = () => {
export const Modal = ({ children, closeHandler }) => {
  return (
    <div
      style={{
        position: "fixed" /* Stay in place */,
        zIndex: 1 /* Sit on top */,
        left: 0,
        top: 0,
        width: "100%" /* Full width */,
        height: "100%" /* Full height */,
        overflow: "auto" /* Enable scroll if needed */,
        backgroundColor: "rgb(0,0,0)" /* Fallback color */,
        backgroundColor: "rgba(0,0,0,0.6)" /* Black w/ opacity */,
      }}
      onClick={closeHandler}
    >
      <button
        style={{
          color: "#aaa",
          float: "right",
          fontSize: "28px",
          fontWeight: "bold",
        }}
        onClick={closeHandler}
      >
        &times;
      </button>
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "15% auto" /* 15% from the top and centered */,
          padding: "20px",
          border: "1px solid #888",
          width: "80%" /* Could be more or less, depending on screen size */,
        }}
      >
        {children}
      </div>
    </div>
  );
};
