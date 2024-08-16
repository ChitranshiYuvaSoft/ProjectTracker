import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 200, height: "150px" }}>
      <List>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <ListItem sx={{ fontSize: "2rem" }}>Register</ListItem>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <ListItem sx={{ fontSize: "2rem" }}>Login</ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={
          !darkMode
            ? { backgroundColor: "#031D36" }
            : { backgroundColor: "#0091ea" }
        }
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
          <Typography
            variant="h4"
            component="div"
            onClick={() => navigate("/")}
            sx={{ flexGrow: 1, fontWeight: "900" }}
          >
            <span>Project</span>Tracker
          </Typography>
          <Box
            sx={{
              width: "15%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {!isMobile && (
              //   <Box sx={{ display: 'flex'}}>
              <>
                {user ? (
                  <>
                    <Link to={"/userdashboard"} style={{ color: "white" }}>
                      <Button color="inherit" sx={{ fontSize: "1.7rem" }}>
                        User Dashboard
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={"/register"} style={{ color: "white" }}>
                      <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                        Register
                      </Button>
                    </Link>
                    <Link to={"/login"} style={{ color: "white" }}>
                      <Button color="inherit" sx={{ fontSize: "1.2rem" }}>
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
