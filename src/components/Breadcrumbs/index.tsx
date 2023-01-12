import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';
import BreadcrumbsMUI from '@mui/material/Breadcrumbs';

import { Paths } from 'routes';

import { TfHeadline } from 'themeforest-design-system-react';

import { Props } from './types';

const Breadcrumbs = ({ current, color }: Props) => {
  return (
    <BreadcrumbsMUI aria-label="breadcrumb" separator="|">
      <NavLink to={Paths.BASE}>
        <Link underline="hover" color="text.secondary">
          <TfHeadline variant="h7" component="span">
            Home
          </TfHeadline>
        </Link>
      </NavLink>
      <TfHeadline variant="h7" component="span" color={color}>
        {current}
      </TfHeadline>
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
