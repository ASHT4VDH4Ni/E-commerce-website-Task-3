
import React, { useState } from "react";
import Logo from "../Assets/CR-Final.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
<<<<<<< HEAD
import ShoppingCart from "./ShoppingCart"; 
=======
import ShoppingCart from "./ShoppingCart";
>>>>>>> a2f2847 (First commit)

const Navbar = ({ scrollToSection, homeRef, aboutRef, workRef, testimonialsRef, contactRef }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => setOpenCart(!openCart);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      ref: homeRef,
    },
    {
      text: "Accessories",
      icon: <InfoIcon />,
      ref: aboutRef,
    },
    {
      text: "Merchandise",
      icon: <InfoIcon />,
      ref: workRef,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      ref: testimonialsRef,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      ref: contactRef,
    },
  ];

  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-links-container">
          <button className="navbar-link" onClick={() => scrollToSection(homeRef)}>Home</button>
          <button className="navbar-link" onClick={() => scrollToSection(aboutRef)}>Accessories</button>
          <button className="navbar-link" onClick={() => scrollToSection(workRef)}>Merchandise</button>
          <button className="navbar-link" onClick={() => scrollToSection(testimonialsRef)}>Testimonials</button>
          <button className="navbar-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
          <button className="navbar-link" onClick={toggleCart}>
            <BsCart2 className="navbar-cart-icon" />
          </button>
          <button className="primary-button" onClick={() => scrollToSection(workRef)}>Shop Now</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(item.ref)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
<<<<<<< HEAD
              
=======

>>>>>>> a2f2847 (First commit)
      <ShoppingCart openCart={openCart} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;
