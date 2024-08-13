import { List, ListItem } from "@mui/material";
import React from "react";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const footerListData = [
  {
    heading: "About",
    first: "AboutUs",
    second: "Newsroom",
    thired: "Blog",
    fourth: "Invetors",
  },
  {
    heading: "Project Data",
    first: "Project",
    second: "Project Management",
    thired: "Drive",
    fourth: "More Search",
  },
  {
    heading: "Contact",
    first: "Information",
    second: "Serve",
    thired: "Support",
    fourth: "Privacy Policy",
  },
];

const ListFooter = () => {
  return (
    <>
      {footerListData.map((item, index) => (
        <List className="listSec" key={index}>
          <ListItem
            className="listItemSec"
            sx={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            {item.heading}
          </ListItem>
          <ListItem className="listItemSec" sx={{ justifyContent: "center" }}>
            {item.first}
          </ListItem>
          <ListItem className="listItemSec" sx={{ justifyContent: "center" }}>{item.second}</ListItem>
          <ListItem className="listItemSec" sx={{ justifyContent: "center" }}>{item.thired}</ListItem>
          <ListItem className="listItemSec" sx={{ justifyContent: "center" }}>{item.fourth}</ListItem>
        </List>
      ))}
      <List className="listSec">
        <ListItem
          className="listItemSec"
          sx={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            // display:"flex",
            // alignItems:"center",
            justifyContent: "center",
          }}
        >
          Social Site
        </ListItem>
        <ListItem
          className="listItemSec"
          sx={{
            display: "flex",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaGithub />}
        </ListItem>
        <ListItem
          className="listItemSec"
          sx={{
            display: "flex",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaInstagram />}
        </ListItem>
        <ListItem
          className="listItemSec"
          sx={{
            display: "flex",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaSquareTwitter />}
        </ListItem>
        <ListItem
          className="listItemSec"
          sx={{
            display: "flex",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaFacebookSquare />}
        </ListItem>
      </List>
    </>
  );
};

export default ListFooter;
