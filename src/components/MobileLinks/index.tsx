import { Fragment } from 'react';

import { Grid, Divider } from '@mui/material';

import { routes } from 'routes';
import { themeParams } from 'theme';
import { TfHeadline } from 'themeforest-design-system-react';

import { Link } from './styled';
import { Props } from './types';

const MobileLinks = ({ toggleDrawer, theme }: Props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        mt={3}
        color={theme === 'dark' ? `${themeParams.colors.white}` : `${themeParams.colors.black}`}
      >
        {routes
          .filter(({ isNav }) => isNav)
          .map(({ path, label }) => (
            <Fragment key={path}>
              <Link to={path} onClick={toggleDrawer && toggleDrawer(false)}>
                <TfHeadline variant="h6" component="p">
                  {label}
                </TfHeadline>
              </Link>
              <Divider
                color={
                  theme === 'dark' ? `${themeParams.colors.white}` : `${themeParams.colors.black}`
                }
                sx={{ borderBottomWidth: '2px' }}
              />
            </Fragment>
          ))}
      </Grid>
    </>
  );
};

export default MobileLinks;
