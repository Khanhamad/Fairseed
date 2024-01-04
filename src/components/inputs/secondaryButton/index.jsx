import { Button, CircularProgress } from "@mui/material";


import React from "react";

const SecondaryButton = ({
  children,
  startIcon,
  color = "text.primary",
  variant = "outlined",
  loaderColor,
  sx,
  isLoading,
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      sx={{
        color: 'text.primary' ,
        height: "36px",
        textTransform: "text-capitalize",
        border: "1px solid #e0e0e0",
        fontSize: {
          xs: "0.6rem",
          md: "0.8rem",
        },
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
      {...otherProps}
    >
      {isLoading && (
        <CircularProgress
          color={loaderColor ? loaderColor : color}
          size={20}
          className="me-2 "
        />
      )}{" "}
      {startIcon} {children}
    </Button>
  );
};

export default SecondaryButton;
