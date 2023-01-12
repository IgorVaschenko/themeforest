import { NavLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import { Paths, getPageUrl } from 'routes';
import { themeParams } from 'theme';
import { TfButton, TfHeadline, TfParagraph } from 'themeforest-design-system-react';
import { Props } from 'types';

const Help = ({ isMatch }: Props) => {
  return (
    <Grid container sx={{ backgroundColor: '#F1F6FA' }} justifyContent="center">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item md={5} xs={12}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item md={6} xs={10}>
                <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
                  Do you need help?
                </TfHeadline>
              </Grid>
              <Grid item md={5} xs={10}>
                <TfParagraph variant={isMatch ? 'p3' : 'p2'} color={themeParams.colors.greyText}>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi.
                </TfParagraph>
              </Grid>
              <Grid item md={6} xs={10} sx={{ marginBottom: '30px' }}>
                <NavLink to={getPageUrl(Paths.CONTACTS)}>
                  <TfButton
                    variant="contained"
                    shadow
                    text="Contact Us"
                    size="md"
                    width={isMatch ? '300px' : '120px'}
                  />
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Help;
