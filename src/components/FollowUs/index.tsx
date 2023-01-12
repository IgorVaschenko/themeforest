import { Grid } from '@mui/material';

import { socials } from 'mocks';
import { themeParams } from 'theme';
import { TfHeadline, TfIcons, TfLink } from 'themeforest-design-system-react';

import { Props } from './types';

const FollowUs = ({ theme }: Props) => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between" mt={5}>
        <Grid item xs={5}>
          <TfHeadline
            variant="h6"
            component="p"
            color={
              theme === 'light' ? `${themeParams.colors.black}` : `${themeParams.colors.white}`
            }
          >
            Follow Us
          </TfHeadline>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            {socials.map(({ image, href }) => (
              <Grid item key={href} sx={{ marginRight: '-10px' }}>
                <TfLink variant="simple" href={href} target="_blank">
                  <TfIcons iconName={theme === 'light' ? `${image}_blue` : image} />
                </TfLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FollowUs;
