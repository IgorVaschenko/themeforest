import { statistics } from 'constants/statistics';

import { Grid } from '@mui/material';

import { clients } from 'mocks';
import { themeParams } from 'theme';
import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';
import { Props } from 'types';

import Clients from 'components/Clients';
import Statistics from 'components/Statistics';

const ProvideServices = ({ isMatch }: Props) => {
  return (
    <Grid container mt={3} mb={3}>
      <Grid item md={2} xs={1} />
      <Grid item md={8} xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: isMatch ? 'center' : 'left' }}
        >
          <Grid item md={10} xs={12}>
            <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
              We provide services that guarantee your success
            </TfHeadline>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item md={7} xs={12}>
                <Statistics statistics={statistics} isMatch={isMatch} short />
              </Grid>
              <Grid item md={4} xs={12}>
                <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={themeParams.colors.greyText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </TfParagraph>
              </Grid>
              <Grid item xs={12}>
                <Clients isMatch={isMatch} clients={clients} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} xs={1} />
    </Grid>
  );
};

export default ProvideServices;
