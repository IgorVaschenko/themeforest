import { Stack } from '@mui/material';

import { TfLink } from 'themeforest-design-system-react';

import { Link } from './styled';

import { NavBarProps } from './types';

const NavBar = ({ direction = 'row', routes }: NavBarProps) => {
  return (
    <Stack direction={direction} spacing={2}>
      {routes.map(
        ({ path, label, isNav }) =>
          isNav && (
            <Link key={path} to={path}>
              <TfLink variant="header_light" text={label} href=""></TfLink>
            </Link>
          )
      )}
    </Stack>
  );
};

export default NavBar;
