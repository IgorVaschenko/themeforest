import { NavLink } from 'react-router-dom';

import { useCallback, useState } from 'react';

import { Grid, useMediaQuery, useTheme } from '@mui/material';

import Drawer from 'components/Drawer';
import NavBar from 'components/NavBar';

import VideoContainer from 'components/VideoContainer';
import { Paths, routes } from 'routes';
import { TfButton, TfIcons } from 'themeforest-design-system-react';

import { HeaderContainer } from './styled';

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <HeaderContainer isMatch={isMatch}>
      {!isMatch ? (
        <>
          <Grid container alignItems="center" mt={3}>
            <Grid item xs={2} />
            <Grid container justifyContent="center">
              <Grid item xs={1}>
                <NavLink to={Paths.BASE}>
                  <TfIcons iconName="logo" />
                </NavLink>
              </Grid>
              <Grid item xs={6}>
                <Grid container justifyContent="center">
                  <NavBar routes={routes} />
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <TfButton
                  variant="contained"
                  shadow
                  text="Watch the demo"
                  icon="icon_play_circle_white_24"
                  size="lg-b"
                  onClick={handleOpen}
                  width="168px"
                ></TfButton>
                <VideoContainer open={open} onClose={handleClose} />
              </Grid>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </>
      ) : (
        <>
          <Grid container justifyContent="space-between" alignItems="center" mt={2}>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <NavLink to={Paths.BASE}>
                <TfIcons iconName="logo" />
              </NavLink>
            </Grid>
            <Grid item xs={8} />
            <Grid item xs={1}>
              <Drawer />
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
