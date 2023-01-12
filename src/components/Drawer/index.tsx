import React, { useState } from 'react';

import { SwipeableDrawer } from '@mui/material';
import BurgerMenu from 'components/Burger';
import { TfIcons } from 'themeforest-design-system-react';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(open);
  };
  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <BurgerMenu toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
      <TfIcons
        onClick={toggleDrawer(true)}
        iconName="icon_navigation_blue"
        style={{ cursor: 'pointer' }}
      />
    </>
  );
};

export default Drawer;
