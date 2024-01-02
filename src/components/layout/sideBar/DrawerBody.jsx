import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { RiArrowRightSFill } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import { TbCaretRightFilled } from "react-icons/tb";

// import {
//   AdminIcon,
//   BookIcon,
//   PhoneIcon,
//   PolicyIcon,
//   SettingsIcon,
//   TeamsIcon,
// } from "../../../utils/Icons";
import { colors } from "../../../constants/theme";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const activeMenuStyles = {
  background: "#FFF4EB",
  borderLeft: "4px solid #FF5733",

  "& .MuiButtonBase-root .MuiListItemText-root .MuiTypography-root": {
    color: "#25272C",
    fontSize: 16,
    fontFamily: "Satoshi",
    fontWeight: 700,
  },
};

const activeSubMenuStyles = {
  background: "#E7A56F",
  width: "95%",
  "& .MuiButtonBase-root .MuiListItemText-root .MuiTypography-root": {
    color: "#25272C",
    fontSize: 16,
    fontFamily: "Satoshi",
    fontWeight: 700,
  },
};

let Icons = {
  TbCaretRightFilled: (isActive) => <TbCaretRightFilled isActive={isActive} />,
  // PolicyIcon: (isActive) => <PolicyIcon isActive={isActive} />,
  // PhoneIcon: (isActive) => <PhoneIcon isActive={isActive} />,
  // SettingsIcon: (isActive) => <SettingsIcon isActive={isActive} />,
  // BookIcon: (isActive) => <BookIcon isActive={isActive} />,
  // AdminIcon: (isActive) => <AdminIcon isActive={isActive} />,
};

const CollapsibleMenuItem = ({
  item,
  index,
  selectedPath,
  setSelectedMenu,
}) => {
  const { pathname } = useLocation();

  return (
    <Box key={item.title + index}>
      <ListItem
        disablePadding
        sx={selectedPath.startsWith(item.path) ? activeMenuStyles : {}}
        onClick={() =>
          setSelectedMenu((prev) => (prev !== item.path ? item.path : ""))
        }
        key={item.title + index}
        
      >
        <ListItemButton className="pl-8 ">
          {/* {item.icon && (
            <ListItemIcon sx={{ minWidth: "40px" }} className="pr-3">
              {item.icon &&
                (Icons[item.icon]
                  ? Icons[item.icon](selectedPath.startsWith(item.path))
                  : "")}
            </ListItemIcon>
          )} */}
          {selectedPath.startsWith(item.path) ? (
            <KeyboardArrowUpIcon  />
          ) : (
            <KeyboardArrowDownIcon />
          )}
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              fontFamily: "satoshi",
              fontSize: 16,
              color: colors.text.main,
              fontWeight: 500,
              paddingLeft:'1rem'
            }}
          />
          
        </ListItemButton>
      </ListItem>
      <Collapse
        in={selectedPath.startsWith(item.path)}
        timeout="auto"
        unmountOnExit
        component="div"
      >
        <List component="div" className={`border-start  ps-2 py-0 ml-8`}>
          {item.children.map((subItem, index) =>
            subItem?.children ? (
              <CollapsibleMenuItem
                item={subItem}
                index={index}
                selectedPath={selectedPath}
                setSelectedMenu={setSelectedMenu}
              />
            ) : (
              <Link key={subItem.title} to={subItem.path}>
                <ListItem
                  disablePadding
                  sx={
                    pathname?.includes(subItem?.path) ? activeSubMenuStyles : {}
                  }
                  key={subItem.title}
                >
                  {subItem.path === pathname && (
                    <svg
                      width="4"
                      height="50"
                      viewBox="0 0 2 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1"
                        y1="0.853027"
                        x2="0.999999"
                        y2="24.853"
                        stroke="#FF9F0A"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                  

                  

                  <ListItemButton className="pl-8">
                  <RiArrowRightSFill className="text-[#B6BAC3]" />
                    <ListItemText
                      primary={subItem.title}
                      primaryTypographyProps={{
                        fontFamily: "satoshi",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#383A42",
                        paddingLeft: "1.5rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Collapse>
    </Box>
  );
};

const DrawerBody = () => {
  const { pathname } = useLocation();

  const menus = [
    {
      icon: "Dashboard",
      path: "/",
      title: "Dashboard",
    },

    {
      icon: "AdminIcon",
      path: "/General-Settings",
      title: "General Settings ",
      children: [
        {
          icon: "TbCaretRightFilled",
          path: "/General-Settings/General",
          title: "General",
        },
        {
          path: "/General-Settings/Limits",
          title: "Limits",
        },
        // {
        //   path: "/admin-console/reports",
        //   title: "Reports",
        // },
        {
          path: "/General-Settings/Profiles-Social",
          title: "Profiles Social",
        },
      ],
    },
    {
      icon: "TbCaretRightFille",
      path: "/Landing-page",
      title: "Landing Page",
    },
    {
      icon: "PolicyIcon",
      path: "/Categories",
      title: "Categories",
    },
    {
      icon: "PolicyIcon",
      path: "/Causes",
      title: "Causes",
    },
    {
      icon: "PolicyIcon",
      path: "/Causes-Edit-Approval",
      title: "Cause Edit Approval",
    },
    {
      icon: "PolicyIcon",
      path: "/Scholarship-Cause",
      title: "Scholarship Cause",
    },
    {
      icon: "PolicyIcon",
      path: "/Reported-Cause",
      title: "Reported Cause",
    },
    {
      icon: "PolicyIcon",
      path: "/Withdrawals",
      title: "Withdrawals",
    },
    {
      icon: "PolicyIcon",
      path: "/Cause-KYC",
      title: "Cause KYC",
    },
    {
      icon: "PolicyIcon",
      path: "/Donations",
      title: "Donations",
    },
    {
      icon: "PolicyIcon",
      path: "/Users",
      title: "Users",
    },
    {
      icon: "PolicyIcon",
      path: "/Scholarships",
      title: "Scholarships",
    },
    {
      icon: "TeamsIcon",
      path: "/Pages",
      title: "Pages",
    },
    {
      icon: "PhoneIcon",
      path: "/PG-Settings",
      title: "PG Settings",
    },
  ];

  // {
  //   icon: "PolicyIcon",
  //   path: "/teams-policy-settings",
  //   title: "Teams Policy Settings",
  // },

  const [selectedPath, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(pathname);
  }, [pathname]);

  return (
    <div className="link-none">
      <List
        // className="pt-4"
        sx={{
          "& .MuiListItem-root": {
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <div className="mx-3 my-2">
          <TextField
            sx={{
              width: "27ch",
              backgroundColor: "",
              "& .MuiInputBase-root input": {
                padding: 0,
              },
            }}
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            placeholder="Quick Find"
          ></TextField>
        </div>

        {menus?.length > 0 &&
          menus?.map((item, index) =>
            item?.children ? (
              <CollapsibleMenuItem
                item={item}
                index={index}
                selectedPath={selectedPath}
                setSelectedMenu={setSelectedMenu}
              />
            ) : (
              <Link to={item.path || "#"} key={item.title + index}>
                <ListItem
                  onClick={() => setSelectedMenu(item.path)}
                  className="mx-auto"
                  disablePadding
                  sx={item.path === selectedPath ? activeMenuStyles : {}}
                >
                  <ListItemButton className="pl-8">
                    <ListItemIcon sx={{ minWidth: "40px" }} className="pr-3">
                      {item.icon &&
                        (Icons[item.icon]
                          ? Icons[item.icon](item.path === selectedPath)
                          : "")}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontFamily: "satoshi",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#717171",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
      </List>
    </div>
  );
};

export default DrawerBody;