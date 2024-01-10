import React from "react";
import { alpha } from "@mui/material/styles";
import { FormLabel, InputBase, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ErrorMessage, useField } from "formik";
import { colors } from "../../../constants/theme";

const InputField = ({
  name,
  variant,
  info,
  CustomInfoIcon,
  infoText,
  characterCount,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant ? variant : "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helpertext = meta.error;
  }

  const styles = (theme) => ({
    minHeight: "43.95px",
    "label + &": {
      marginTop: "0.3rem",
    },
    "& .MuiInputBase-input": {
      borderRadius: "4px",
      borderTopLeftRadius: configTextfield?.startAdornment ? "0px" : "4px",
      borderBottomLeftRadius: configTextfield?.startAdornment ? "0px" : "4px",
      position: "relative",
      backgroundColor: "#fff",
      border: "1px solid #e2e2e2",
      fontSize: "0.9rem",
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // fontFamily: ["FuturaLight"].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },

      "&.Mui-disabled": {
        backgroundColor: configTextfield?.disabledBgColor
          ? configTextfield?.disabledBgColor
          : "#F5F5F5",
        fontSize: "0.9rem !important",
      },
    },
    "& input::placeholder": {
      fontSize: "0.9rem",
    },
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: configTextfield?.disabledColor
        ? configTextfield?.disabledColor
        : "#00000099",
    },
    "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
      backgroundColor: "#fff",
      padding: "21px 12px",
      fontSize: "0.9rem",
      marginLeft: "0px",
      borderTopRightRadius: theme.shape.borderRadius + "px",
      borderBottomRightRadius: theme.shape.borderRadius + "px",
    },
    "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
      backgroundColor: theme.palette.divider,
      padding: "21px 12px",
      fontSize: "0.9rem",
      marginRight: "0px",
      borderTopLeftRadius: theme.shape.borderRadius + "px",
      borderBottomLeftRadius: theme.shape.borderRadius + "px",
    },
  });

  const tooltipData = localStorage.getItem("tooltipData")
    ? JSON.parse(localStorage.getItem("tooltipData"))?.filter(
        (item) =>
          item?.field_name?.toLowerCase() ===
          configTextfield?.label?.toLowerCase()
      )
    : null;

  return (
    <>
      <FormLabel
        className="text-capitalize font-medium d-flex align-items-center"
        sx={{ color: colors.text.main, fontSize: "0.8rem", height: "22px" }}
      >
        {configTextfield?.label}{" "}
        {characterCount &&
          configTextfield?.value?.length > 0 &&
          `(characters typed: ${configTextfield?.value?.length})`}
        {info && (
          <Tooltip
            placement="right-start"
            title={
              tooltipData?.length > 0 ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: tooltipData?.[0]?.description,
                  }}
                ></div>
              ) : infoText ? (
                infoText
              ) : (
                "lorem ipsum dolor 20"
              )
            }
          >
            {CustomInfoIcon ? (
              CustomInfoIcon
            ) : (
              <InfoIcon
                className="ms-1"
                style={{
                  color: colors.primary.dark,
                  cursor: "pointer",
                  height: "22px",
                }}
              />
            )}
          </Tooltip>
        )}
      </FormLabel>
      <InputBase
        sx={styles}
        style={{ ...configTextfield?.style }}
        {...configTextfield}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>{msg}</div>
        )}
      />
    </>
  );
};

export default InputField;
