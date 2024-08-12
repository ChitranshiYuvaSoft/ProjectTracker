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
      {footerListData.map((item) => (
        <List
          key={item.index}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <ListItem
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.heading}
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.first}
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.second}
          </ListItem>
          <ListItem
            sx={{
              width: "100",
              textAlign: "center",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.thired}
          </ListItem>
          <ListItem
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.fourth}
          </ListItem>
        </List>
      ))}
      <List
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <ListItem
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
        >
          Social Site
        </ListItem>
        <ListItem
          sx={{
            width: "25%",
            textAlign: "center",
            display: "flex",
            fontSize: "2.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {<FaGithub />}
        </ListItem>
        <ListItem
          sx={{
            width: "25%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaInstagram />}
        </ListItem>
        <ListItem
          sx={{
            width: "25%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: "2.5rem",
            justifyContent: "center",
          }}
        >
          {<FaSquareTwitter />}
        </ListItem>
        <ListItem
          sx={{
            width: "25%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
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
