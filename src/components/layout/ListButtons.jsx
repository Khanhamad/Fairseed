import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { FaCaretDown } from "react-icons/fa";
import { IoCaretUpOutline } from "react-icons/io5";
import { TbCaretRightFilled } from "react-icons/tb";
import { useState } from "react";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    // Update the state to the clicked button
    setClickedButton(buttonName);
  };
  

  

  const getButtonStyle = (buttonName) => {
    const defaultStyle = {
      backgroundColor: "white",
      fontSize: "10px !important",
      fontFamily: "satoshi",
      fontWeight: 500,
    };

    const activeStyle = {
      backgroundColor: "#FFF4EB",
      borderLeft:'2px solid red',
      
      
      "& .MuiListItemText-root .MuiTypography-root":{
        fontSize: 20,
      fontWeight: 500,
      color: "#25272C",
      fontFamily: "satoshi",


      }
    };

 
    return clickedButton === buttonName
      ? { ...defaultStyle,...activeStyle }
      : defaultStyle;
  };
  const [clickedListButton, setClickedListButton] = useState(null);
  const handleListButtonClick = (buttonListName) => {
    // Update the state to the clicked button
    setClickedListButton(buttonListName);
  };
  const getListButtonStyle = (buttonListName) => {
    const defaultListStyle = {
      backgroundColor: "white",
      fontSize: 16,
      fontFamily: "satoshi",
      fontWeight: 500,
      color:'#717171'
    };

    const activeListStyle = {
      backgroundColor: "#E7A56F",
      fontSize: 16,
      fontWeight: 800,
      color: "#25272C",
      fontFamily: "satoshi",

    };

    return clickedListButton === buttonListName
      ? {  ...defaultListStyle,...activeListStyle }
      : defaultListStyle;
  };


  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "satoshi",
              paddingLeft: "2.5rem",
            }}
          >
            Dashboard
          </ListSubheader>
        }
      >
        <ListItemButton

         variant="contained"
          onClick={()=>{handleClick()}}
        >
          {open ? <IoCaretUpOutline /> : <FaCaretDown />}
          <ListItemText className="pl-2 " primary="General Settings" />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              variant="contained"
              sx={getListButtonStyle("h")}
              onClick={() => handleListButtonClick("h")}
            >
              <TbCaretRightFilled className="text-[#B6BAC3]" />
              <ListItemText sx={{ pl: 1 }} primary="General" />
            </ListItemButton>
            <ListItemButton
               variant="contained"
               sx={getListButtonStyle("i")}
               onClick={() => handleListButtonClick("i")}
            >
              <TbCaretRightFilled className="text-[#B6BAC3]" />
              <ListItemText sx={{ pl: 1 }} primary="Limits" />
            </ListItemButton>
            <ListItemButton
               variant="contained"
               sx={getListButtonStyle("j")}
               onClick={() => handleListButtonClick("j")}
            >
              <TbCaretRightFilled className="text-[#B6BAC3]"  />
              <ListItemText sx={{ pl: 1 }} primary="Profiles Social" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          variant="contained"
          sx={ getButtonStyle("a")}
          onClick={() => handleButtonClick("a")}
        >
          <ListItemText className="pl-7" primary="Landing Page" />
        </ListItemButton>
     
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("b")}
        onClick={() => handleButtonClick("b")}
      >
        <ListItemText className="pl-7" primary="Categories" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("c")}
        onClick={() => handleButtonClick("c")}
      >
        <ListItemText className="pl-7" primary="Causes" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("d")}
        onClick={() => handleButtonClick("d")}
      >
        <ListItemText className="pl-7" primary="Cause Edit Approval" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("e")}
        onClick={() => handleButtonClick("e")}
      >
        <ListItemText className="pl-7" primary="Scholarship Cause" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("f")}
        onClick={() => handleButtonClick("f")}
      >
        <ListItemText className="pl-7" primary="Reported Cause" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("g")}
        onClick={() => handleButtonClick("g")}
      >
        <ListItemText className="pl-7" primary="Withdrawals" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("k")}
        onClick={() => handleButtonClick("k")}
      >
        <ListItemText className="pl-7" primary="Cause KYC" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("l")}
        onClick={() => handleButtonClick("l")}
      >
        <ListItemText className="pl-7" primary="Donations" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("m")}
        onClick={() => handleButtonClick("m")}
      >
        <ListItemText className="pl-7" primary="Users" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("n")}
        onClick={() => handleButtonClick("n")}
      >
        <ListItemText className="pl-7" primary="Scholarships" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("q")}
        onClick={() => handleButtonClick("q")}
      >
        <ListItemText className="pl-7" primary="Pages" />
      </ListItemButton>
      <ListItemButton
        variant="contained"
        sx={getButtonStyle("r")}
        onClick={() => handleButtonClick("r")}
      >
        <ListItemText className="pl-7" primary="PG Settings" />
      </ListItemButton>
      </List>
    </>
  );
}
