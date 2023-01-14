import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';

import { getSolutionsUrl } from 'routes';
import { TfCard, TfLink } from 'themeforest-design-system-react';

import { Props } from './types';

const Benefits = ({ benefits, variant }: Props) => {
  const { isMatch } = useMatch();
  return (
    <Grid container spacing={6} mt={!isMatch ? 5 : 0} mb={10} justifyContent="center">
      {benefits.map(({ icon, title, subtitle, id }, idx) => (
        <Grid
          item
          md={6}
          xs={10}
          key={title}
          mt={
            variant === 'home' && idx === 1 && !isMatch
              ? 10
              : variant === 'home' && idx === 2 && !isMatch
              ? -10
              : 0
          }
        >
          <Grid container justifyContent="center">
            <TfCard
              view="services"
              variant="small-card"
              icon={icon}
              title={title}
              subtitle={subtitle}
            >
              {variant === 'solutions' && id && (
                <Link to={getSolutionsUrl(id)}>
                  {' '}
                  <TfLink variant="arrow" text="Read more" href="" />{' '}
                </Link>
              )}
            </TfCard>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Benefits;
