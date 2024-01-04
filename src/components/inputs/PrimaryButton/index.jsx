import { Button, CircularProgress } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, sx, isLoading, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      color={"warning"}
      sx={{
        color: "#fff",
        boxShadow: "none",
        height: "36px",
        fontSize: {
          xs: "0.6rem",
          md: "0.8rem",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {isLoading && <CircularProgress size={20} className="me-2 text-white " />}
      {children}
    </Button>
  );
};

export default PrimaryButton;
