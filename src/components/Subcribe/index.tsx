import { Grid } from '@mui/material';

import { themeParams } from 'theme';
import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import { Props } from 'types';

import SubscribeForm from 'components/SubcribeForm';

const Subscribe = ({ isMatch }: Props) => {
  return (
    <Grid
      container
      pt={isMatch ? 2 : 6}
      pb={isMatch ? 2 : 6}
      sx={{
        backgroundColor: `${themeParams.colors.secondary}`,
        color: `${themeParams.colors.white}`,
        borderBottom: '1px solid white',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={2} xs={0} />
      <Grid item md={4} xs={10}>
        <Grid item md={8} xs={12}>
          <Grid container direction="column" sx={{ textAlign: isMatch ? 'center' : '' }}>
            <Grid item xs={12}>
              <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
                Subscribe to our newsletter
              </TfHeadline>
            </Grid>
            {!isMatch && (
              <Grid item>
                <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={themeParams.colors.greyText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium.
                </TfParagraph>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={12}>
        <SubscribeForm />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
export default Subscribe;
