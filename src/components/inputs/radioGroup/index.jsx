import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";
import { colors } from "../../../constants/theme";

const RadioGroup = ({ label, options, onChange, ...otherProps }) => {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& .MuiFormLabel-root.Mui-focused": {
          color: colors.text.main,
        },
      }}
    >
      <FormLabel
        className="text-capitalize font-medium d-flex align-items-center mb-1 me-4"
        sx={{
          color: colors.text.main,
          fontSize: "0.8rem",
          height: "22px",
        }}
        id={`demo-radio-buttons-group-label-${label}`}
      >
        {label}
      </FormLabel>
      <MuiRadioGroup
        {...otherProps}
        aria-labelledby={`demo-radio-buttons-group-label-${label}`}
        name={`radio-buttons-group-${label}`}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      >
        {options?.map((item) => (
          <FormControlLabel
            className="text-sm md:text-base d-flex justify-content-start align-items-center"
            id={Math.random() < 0.5 ? "select" : undefined}
            {...otherProps?.formControlProps}
            key={item?.value?.toString()}
            value={item.value}
            sx={{
              "& .MuiTypography-root": {
                fontSize: "0.8rem",
                padding: "9px",
              },
            }}
            control={
              <Radio
                color="warning"
                sx={{
                  color: colors.primary.dark,
                }}
              />
            }
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
