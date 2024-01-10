import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
  Form,
} from "react-hook-form";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { border, styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import { colors } from "../../../constants/theme";
import InputField from "../../../components/inputs/InputField";
import SelectField from "../../../components/inputs/SelectField";
import { FormLabel } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import images from "../../../constants/images";
import UploadField from "../../../components/inputs/UploadField/Index";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import ReactQuill from "react-quill";
import DropZone from "../../../components/inputs/dragAndDrop/index";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const styleStep = {
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
      fontWeight: 900,
    },

    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
  },
  "& .Mui-complete": {
    "& .MuiStepIcon-root": {
      color: "green",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "green",
    },
  },
};

const StyledButton_1 = styled(Button)({
  background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
  color: "white",
  display: "flex",
  width: "100%",
  height: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  borderRadius: "12px",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 600,
  marginTop: "10px",
  "& .Mui-active": {
    color: "warning.main",
  },
});
const StyledButton_2 = styled(Button)({
  background: "black",
  WebkitBackgroundClip: "text",
  display: "flex",
  width: "100%",
  height: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  borderRadius: "12px",
  border: "1px solid var(--Linear-BG, #FF9F0A)",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 600,
  marginTop: "10px",
});

function getSteps() {
  return ["Campaign Details", "Your Story", "Account Details", "Complete KYC"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Box>
        <DropZone
          name="files"
          acceptedFiles={{ "file/*": [".xlsx"] }}
          maxFiles={1}
          // onChange={() => submitForm()}
          // isLoading={isUploadLoading}
        />
      </Box>
      <Controller
        control={control}
        name="Title"
        render={({ field }) => (
          <InputField
            name={"Title"}
            label={"Title of the Campaign:"}
            placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Amount"
        render={({ field }) => (
          <InputField
            name={"Amount"}
            label={"Amount to be raised:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Location"
        render={({ field }) => (
          <SelectField
            name={"Location"}
            label={"Location:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Category"
        render={({ field }) => (
          <SelectField
            name={"Category"}
            label={"Choose a Category:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      {/* <Controller
        control={control}
        name="Date"
        render={({ field }) => (
          <div className="pb-[1rem]">
            <div>
              <FormLabel
                className="text-capitalize font-medium d-flex align-items-center"
                style={{
                  padding: "4px 8px 8px 8px",
                  color: colors.text.main,
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "satoshi",
                  fontStyle: "normal",
                  height: "22px",
                }}
                // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
              >
                Is the Campaign Zakaat eligible?
                <RiStarSFill
                  style={{
                    fill: "var(--Status-Error, #E00000)",
                    width: "10px",
                    height: "80%",
                  }}
                />
              </FormLabel>
              <div className="inline-flex justify-center items-center text-center">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
                <FormLabel
                  className="text-capitalize font-medium d-flex "
                  style={{
                    color: colors.text.main,
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "satoshi",
                    fontStyle: "normal",
                    height: "22px",
                  }}
                  // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
                >
                  Yes
                </FormLabel>
              </div>
            </div>
            <div>
              <InputField
                type={"date"}
                label={"Stroke_Text Colour/Active Text:"}
                sx={{
                  padding: " var(--Pixels-8, 8px) var(--Pixels-16, 16px)",
                  borderRadius: "25px !important",
                  padding: "10px !important",
                }}
                {...field}
              />
            </div>
          </div>
        )}
      /> */}
      <div className="inline-flex w-full">
        <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <>
                <FormLabel
                  className="text-capitalize font-medium d-flex align-items-center"
                  style={{
                    padding: "4px 8px 8px 8px",
                    color: colors.text.main,
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "satoshi",
                    fontStyle: "normal",
                    height: "22px",
                  }}
                  // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
                >
                  Is the Campaign Zakaat eligible?
                  <RiStarSFill
                    style={{
                      fill: "var(--Status-Error, #E00000)",
                      width: "10px",
                      height: "80%",
                    }}
                  />
                </FormLabel>
                <div className="inline-flex justify-center items-center text-center">
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                  <FormLabel
                    className="text-capitalize font-medium d-flex "
                    style={{
                      color: colors.text.main,
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "satoshi",
                      fontStyle: "normal",
                      height: "22px",
                    }}
                    // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
                  >
                    Yes
                  </FormLabel>
                </div>
              </>
            )}
          />
        </div>
        <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <div>
                <InputField
                  type={"date"}
                  name={"Category"}
                  label={"Choose a Category:"}
                  // placeholder={"Title of the Campaign (Max 250 Words)"}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};
const YourStory = () => {
  const { control } = useFormContext();
  const [valueText, setValueText] = useState("");
  const [valueText2, setValueText2] = useState("");

  return (
    <>
      <Controller
        control={control}
        name="Story"
        render={({ field }) => (
          <div className="pb-[4rem]">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Tell us your Story:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[150px]">
              <ReactQuill
                theme="snow"
                name={"Story"}
                value={valueText}
                placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
  Pointers:Explain who you are raising it for.

   Explain why you are raising funds?
                
  Make an Appeal.`}
              onChange={setValueText}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Summary"
        render={({ field }) => (
          <div className="pb-[4rem]">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Summary:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[250px]">
              <ReactQuill
                theme="snow"
                name={"Summary"}
                value={valueText}
                placeholder="Summarize in 100 words max."
                style={{ "& .ql-editor": { minHeight: "50px" } }}
                onChange={setValueText2}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Documents"
        render={({ field }) => (
          <div className="flex pb-[4rem] w-full">
            <div className="w-[95%]">
              <InputField
                name={"Documents"}
                label={"Documents:"}
                placeholder={
                  "Upload marksheets, Medical records, Fees Structure etc."
                }
                {...field}
              />
            </div>
            <div></div>
            <img className="pb-1" src={images.UploadFile} alt="" />
          </div>
        )}
      />
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="HolderName"
        render={({ field }) => (
          <InputField
            name={"HolderName"}
            label={"Account holder Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="AccountNumber"
        render={({ field }) => (
          <SelectField
            name={"AccountNumber"}
            label={"Account Number:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="BankName"
        render={({ field }) => (
          <InputField
            name={"BankName"}
            label={"Bank Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="BranchName"
        render={({ field }) => (
          <InputField
            name={"BranchName"}
            label={"Branch Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="IFSC"
        render={({ field }) => (
          <InputField
            name={"IFSC"}
            label={"IFSC:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadBankPassbook/Cheque"}
              label={"Upload Bank Passbook/Cheque:"}
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadBankPassbook/Cheque"}
              label={"Upload Bank Passbook/Cheque:"}
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadBankPassbook/Cheque"}
              label={"Upload Bank Passbook/Cheque:"}
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadBankPassbook/Cheque"}
              label={"Upload Bank Passbook/Cheque:"}
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadBankPassbook/Cheque"}
              label={"Upload Bank Passbook/Cheque:"}
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <YourStory />;
    case 2:
      return <ContactForm />;
    case 3:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  // const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const handleReset = () => {
    setActiveStep(0);
  };
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Box sx={{ width: "60%" }}>
      <Stepper alternativeLabel activeStep={activeStep} sx={styleStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FormProvider {...methods}>
            <Form
              sx={{ display: "flex", pt: 6, gap: "10px" }}
              onSubmit={methods.handleSubmit(handleNext)}
            >
              {getStepContent(activeStep)}

              <div className="flex gap-3">
                <StyledButton_2
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  <ArrowLeftIcon sx={{ color: "black" }} />
                  Back
                </StyledButton_2>
                {/* {isStepOptional(activeStep) && (
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
                <StyledButton_1 onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  <ArrowRightIcon />
                </StyledButton_1>
              </div>
            </Form>
          </FormProvider>
        </React.Fragment>
      )}
    </Box>
  );
};

export default LinaerStepper;
