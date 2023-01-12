import { Grid } from '@mui/material';

import { TfCard } from 'themeforest-design-system-react';

import { Props } from './types';

const TeamBox = ({ persons, count, isMatch }: Props) => {
  return (
    <Grid container pt={10} pb={10}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Grid container spacing={4} justifyContent="center">
          {persons.slice(0, count).map(({ id, image, title, subtitle }) => (
            <Grid item key={id} md={4} xs={11}>
              <TfCard
                width="320px"
                view={isMatch ? 'team_mobile' : 'team'}
                variant={isMatch ? 'horizontal' : 'vertical'}
                image={image}
                title={title}
                position={subtitle}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default TeamBox;
