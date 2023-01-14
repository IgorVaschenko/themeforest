import { Link } from 'react-router-dom';

import { useState } from 'react';

import Grid from '@mui/material/Grid';

import useMatch from 'hooks/useMatch';
import { getServicesUrl } from 'routes';
import { TfCard, TfLink } from 'themeforest-design-system-react';

import { Props } from './types';
const InfoCard = ({ image, title, subtitle, link }: Props) => {
  const { isMatch } = useMatch();
  return (
    <Grid item xs={12} md={5} key={title}>
      <TfCard
        view={!isMatch ? 'services' : 'services_mobile'}
        variant={!isMatch ? 'glass-icons' : 'glass_icons_mob'}
        icon={image}
        title={title}
        subtitle={subtitle}
      >
        <Link to={getServicesUrl(link)}>
          <TfLink variant="arrow" text="Read more" />{' '}
        </Link>
      </TfCard>
    </Grid>
  );
};

export default InfoCard;
