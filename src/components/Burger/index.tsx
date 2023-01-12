import { Grid } from '@mui/material';
import { TfIcons } from 'themeforest-design-system-react';

import FollowUs from 'components/FollowUs';
import MobileLinks from 'components/MobileLinks';

import { Props } from './types';

const BurgerMenu = ({ toggleDrawer }: Props) => {
  return (
    <>
      <Grid container mt={2} sx={{ minWidth: '400px' }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container direction="column">
            <Grid container justifyContent="space-between">
              <Grid item mt={2}>
                <TfIcons iconName="logo" />
              </Grid>
              <Grid item mt={2} alignSelf="center">
                <TfIcons
                  style={{ cursor: 'pointer' }}
                  onClick={toggleDrawer(false)}
                  iconName="icon_dismiss"
                />
              </Grid>
              <MobileLinks toggleDrawer={toggleDrawer} />
              <FollowUs theme="light" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
};

export default BurgerMenu;
