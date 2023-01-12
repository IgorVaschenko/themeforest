import { NavLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import { Paths } from 'routes';
import { themeParams } from 'theme';
import { TfIcons } from 'themeforest-design-system-react';

import FollowUs from 'components/FollowUs';
import MobileLinks from 'components/MobileLinks';

const FooterLinksMob = () => {
  return (
    <Grid container sx={{ minWidth: '400px', backgroundColor: `${themeParams.colors.secondary}` }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container direction="column">
          <Grid item mt={2}>
            <NavLink to={Paths.BASE}>
              <TfIcons iconName="logo_white" />
            </NavLink>
          </Grid>
          <Grid item>
            <MobileLinks theme="dark" />
          </Grid>
          <Grid item>
            <FollowUs theme="dark" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default FooterLinksMob;
