import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardUser from "../Components/UserDashboard/DashboardUser";
import UserProfile from "../Components/UserDashboard/UserProfile";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;

const UserDashboard = () => {

  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor:"#214E78",
          paddingTop:"2rem"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <UserProfile />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "end",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <ListItem
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ListItemText
                sx={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  justifyContent: "start",
                }}
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{color:"#B1BDC7"}}>
                  All Projects
                </Typography>
              </ListItemText>
              <Button sx={{color:"white"}} onClick={()=>navigate("/projects")}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Button>
            </ListItem>
            <ListItem
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ListItemText
                sx={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  justifyContent: "start",
                }}
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{color:"#B1BDC7"}}>
                  {" "}
                  All Features
                </Typography>
              </ListItemText>
              <Button sx={{color:"white"}}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Button>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <List
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "70%",
                fontSize: "1.1rem",
                borderRadius: "0",
                backgroundColor:"#031D36",
                color:"white",
                borderBlock:"1px solid white"
              }}
            >
              LogOut
            </Button>
          </List>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#A4C7E7" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: {
            sm: `${drawerWidth}px`,
            width: "100%",
            height: "6.5rem",
            backgroundColor: "#031D36",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            color="white"
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: "6rem",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "none",
          boxShadow: "none",
          
        }}
      >
        <DashboardUser />
      </Box>
    </Box>
  );
};

export default UserDashboard;
