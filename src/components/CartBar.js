import React, { useState } from 'react';
import {
  Badge,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

const CartBar = ({ onCheckout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getItemPrice = (item) =>
    typeof item.price === 'string'
      ? parseFloat(item.price.replace('$', ''))
      : item.price || 0;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0
  );

  return (
    <>
      <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
        <Badge badgeContent={cartItems.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 350 }}>
          <h5 className="p-3 border-bottom">🛒 Cart Items</h5>
          <List>
            {cartItems.length === 0 ? (
              <ListItem>
                <ListItemText primary="Cart is empty" />
              </ListItem>
            ) : (
              cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <>
                      <Button
                        size="small"
                        onClick={() =>
                          dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })
                        }
                      >
                        -
                      </Button>
                      <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                      <Button
                        size="small"
                        onClick={() =>
                          dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })
                        }
                      >
                        +
                      </Button>
                    </>
                  }
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`$${(getItemPrice(item) * item.quantity).toFixed(2)}`}
                  />
                </ListItem>
              ))
            )}
          </List>
          <div className="p-3 border-top">
            {cartItems.length === 0 && (
              <div className="text-danger mb-2">Cart is empty</div>
            )}
            <div className="mb-2">
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={cartItems.length === 0}
              onClick={() => {
                setDrawerOpen(false);
                if (typeof onCheckout === 'function') {
                  onCheckout();
                } else {
                  console.error('onCheckout is not a function');
                }
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartBar;
