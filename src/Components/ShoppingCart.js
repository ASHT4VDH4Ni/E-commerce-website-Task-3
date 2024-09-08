import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ShoppingCart = ({ openCart, toggleCart }) => {
  const [cartItems, ] = useState([
   
  ]);

  return (
    <Drawer anchor="right" open={openCart} onClose={toggleCart}>
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleCart}
        onKeyDown={toggleCart}
      >
        <h2>Shopping Cart</h2>
        <Divider />
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={item.price} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;





























































// 3rd edit 



