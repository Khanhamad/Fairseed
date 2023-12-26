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
import { Link, useLocation } from "react-router-dom";
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
  background: 'yellow',
  borderRadius: "4px",
};

const activeSubMenuStyles = {
  background: "#F5F5F5B2",
  width: "95%",
  marginRight: "auto",
};

let Icons = {
  // TeamsIcon: (isActive) => <TeamsIcon isActive={isActive} />,
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
        style={selectedPath.startsWith(item.path) ? activeMenuStyles : {}}
        onClick={() =>
          setSelectedMenu((prev) => (prev !== item.path ? item.path : ""))
        }
        key={item.title + index}
      >
        <ListItemButton className="pl-8">
          {item.icon && (
            <ListItemIcon sx={{ minWidth: "40px" }} className="pr-3">
              {item.icon &&
                (Icons[item.icon]
                  ? Icons[item.icon](selectedPath.startsWith(item.path))
                  : "")}
            </ListItemIcon>
          )}
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              className: "font-medium",
              fontSize: "0.9rem",
              color: colors.text.main,
            }}
          />
          {selectedPath.startsWith(item.path) ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse
        in={selectedPath.startsWith(item.path)}
        timeout="auto"
        unmountOnExit
        component="div"
      >
        <List
          component="div"
          className={`border-start border-3 ps-3 py-0 ml-8`}
        >
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
                  style={
                    pathname?.includes(subItem?.path) ? activeSubMenuStyles : {}
                  }
                  key={subItem.title}
                >
                  {subItem.path === pathname && (
                    <svg
                      width="2"
                      height="25"
                      viewBox="0 0 2 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1"
                        y1="0.853027"
                        x2="0.999999"
                        y2="24.853"
                        stroke="#F58220"
                        strokeWidth="2"
                      />
                    </svg>
                  )}

                  <ListItemButton className="pl-8">
                    <ListItemText
                      primary={subItem.title}
                      primaryTypographyProps={{
                        className: "font-medium",
                        fontSize: "0.9rem",
                        color: "#4D4D4F",
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




  const menus =  [
    {
      icon: "AdminIcon",
      path: "/admin-console",
      title: "General Settings  ",
      children: [
        {
          path: "/donations",
          title: "Donations",
        },
        {
          path: "/admin-console/audit-trail",
          title: "Audit Trail",
        },
        // {
        //   path: "/admin-console/reports",
        //   title: "Reports",
        // },
        {
          path: "/admin-console/tooltip-settings",
          title: "Tooltip Settings",
        },
      ],
    },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "PolicyIcon",
          path: "/all-numbers",
          title: "All Numbers",
        },
        {
          icon: "TeamsIcon",
          path: "/migration",
          title: "Migration",
        },
        {
          icon: "PhoneIcon",
          path: "/number-inventory",
          title: "Number Inventory",
        },
       
      ]
    
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
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <div className="mx-2.5 my-2">
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
                  style={item.path === selectedPath ? activeMenuStyles : {}}
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
                        className: "font-medium",
                        fontSize: "0.9rem",
                        color: "#4D4D4F",
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
