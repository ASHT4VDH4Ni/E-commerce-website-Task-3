import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const ShoppingCart = ({ openCart, toggleCart, cartItems = [], setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let itemsCount = 0;
    let price = 0;

    cartItems.forEach((item) => {
      itemsCount += item.quantity;
      price += item.quantity * parseFloat(item.price.replace('₹', '').replace(',', ''));
    });

    setTotalItems(itemsCount);
    setTotalPrice(price);
  }, [cartItems]);

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity < 3) {
      updatedCart[index].quantity += 1;
      setCartItems(updatedCart);
    }
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  return (
    <Drawer anchor="right" open={openCart} onClose={toggleCart}>
      <Box sx={{ width: 400 }} role="presentation"> {/* Increased width */}
        <h2>Shopping Cart</h2>
        <Divider />
        <List>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListItem key={index}>
                <img src={item.image} alt={item.title} style={{ width: "80px", marginRight: "10px" }} /> {/* Increased image size */}
                <ListItemText primary={item.title} secondary={`${item.price}`} />
                <Button onClick={() => handleDecreaseQuantity(index)}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => handleIncreaseQuantity(index)}>+</Button>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="Your cart is empty" />
            </ListItem>
          )}
        </List>
        <Divider />
        <h3>Total Items: {totalItems}</h3>
        <h3>Total Price: {totalPrice}₹</h3>
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;


































































// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Button from "@mui/material/Button"; // Add button for + and -

// const ShoppingCart = ({ openCart, toggleCart, cartItems = [], updateCartItems }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     // Calculate total items and total price whenever cartItems change
//     let itemsCount = 0;
//     let price = 0;

//     cartItems.forEach(item => {
//       itemsCount += item.quantity;
//       price += item.quantity * item.price;
//     });

//     setTotalItems(itemsCount);
//     setTotalPrice(price);
//   }, [cartItems]);

//   const handleIncreaseQuantity = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity < 3) {
//       updatedCart[index].quantity += 1;
//       updateCartItems(updatedCart); // Call the function to update the cart in parent component
//     }
//   };

//   const handleDecreaseQuantity = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       updateCartItems(updatedCart);
//     }
//   };

//   return (
//     <Drawer anchor="right" open={openCart} onClose={toggleCart}>
//       <Box
//         sx={{ width: 300 }}
//         role="presentation"
//       >
//         <h2>Shopping Cart</h2>
//         <Divider />
//         <List>
//           {cartItems.length > 0 ? (
//             cartItems.map((item, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={item.name} secondary={`${item.price}₹`} />
//                 <Button onClick={() => handleDecreaseQuantity(index)}>-</Button>
//                 <span>{item.quantity}</span>
//                 <Button onClick={() => handleIncreaseQuantity(index)}>+</Button>
//               </ListItem>
//             ))
//           ) : (
//             <ListItem>
//               <ListItemText primary="Your cart is empty" />
//             </ListItem>
//           )}
//         </List>
//         <Divider />
//         <h3>Total Items: {totalItems}</h3>
//         <h3>Total Price: {totalPrice}₹</h3>
//       </Box>
//     </Drawer>
//   );
// };

// export default ShoppingCart;


























// // 3rd Edit
// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Button from "@mui/material/Button";

// const ShoppingCart = ({ openCart, toggleCart, cartItems = [], setCartItems }) => {  // Added default value here
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     console.log("Cart Items Updated:", cartItems);
//     let itemsCount = 0;
//     let price = 0;

//     cartItems.forEach(item => {
//       itemsCount += item.quantity;
//       price += item.quantity * parseFloat(item.price.replace('₹', '').replace(',', ''));
//     });

//     setTotalItems(itemsCount);
//     setTotalPrice(price);
//   }, [cartItems]);

//   const handleIncreaseQuantity = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity < 3) {
//       updatedCart[index].quantity += 1;
//       setCartItems(updatedCart);
//     }
//   };

//   const handleDecreaseQuantity = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       setCartItems(updatedCart);
//     }
//   };

//   return (
//     <Drawer anchor="right" open={openCart} onClose={toggleCart}>
//       <Box sx={{ width: 300 }} role="presentation">
//         <h2>Shopping Cart</h2>
//         <Divider />
//         <List>
//           {cartItems.length > 0 ? (
//             cartItems.map((item, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={item.title} secondary={`${item.price}`} />
//                 <Button onClick={() => handleDecreaseQuantity(index)}>-</Button>
//                 <span>{item.quantity}</span>
//                 <Button onClick={() => handleIncreaseQuantity(index)}>+</Button>
//               </ListItem>
//             ))
//           ) : (
//             <ListItem>
//               <ListItemText primary="Your cart is empty" />
//             </ListItem>
//           )}
//         </List>
//         <Divider />
//         <h3>Total Items: {totalItems}</h3>
//         <h3>Total Price: {totalPrice}₹</h3>
//       </Box>
//     </Drawer>
//   );
// };

// export default ShoppingCart;

