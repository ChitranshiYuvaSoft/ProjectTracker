import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FormControlLabel, Switch, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate=useNavigate()
    const handleChange = (event) => {
      setDarkMode(event.target.checked);
    };
  
    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };
  
    const drawer = (
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem>
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Box>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={!darkMode ? { backgroundColor: "#031D36" } : { backgroundColor: "#0091ea" }}>
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
                <MenuIcon sx={{fontSize : "2rem"}}/>
              </IconButton>
            )}
            <Typography variant="h4" component="div" onClick={()=>navigate("/userDashboard")} sx={{ flexGrow: 1, fontWeight :"900" }}>
            <span>Project</span>Tracker
            </Typography>
           <Box sx={{width : "25%", height : "100%" , display :"flex", alignItems :"center" , justifyContent : "space-around"}}>
           {!isMobile && (
            //   <Box sx={{ display: 'flex'}}>
              <>
                <Button color="inherit" sx={{ fontSize: "1.2rem" }}>Register</Button>
                <Button color="inherit" sx={{ fontSize: "1.2rem" }}>Login</Button>
              </>
            //   </Box>
            )}
            <FormControlLabel
              control={
                <Switch checked={darkMode} sx={{color : "white"}} onChange={handleChange} name="dark" color="white"/>
              }
             />
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
  