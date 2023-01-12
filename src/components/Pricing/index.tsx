import { Grid } from '@mui/material';
import { useAlertMessage } from 'hooks';
import { prices } from 'mocks/prices';

import { TfHeadline } from 'themeforest-design-system-react';

import AlertMessage from 'components/AlertMessage';
import PriceCard from 'components/PriceCard';

import { Props } from './types';

const Pricing = ({ isMatch }: Props) => {
  const [alertProps, setSuccess, setError] = useAlertMessage(500000);
  return (
    <Grid container direction="column">
      <Grid container>
        <Grid item>
          <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
            Our pricing
          </TfHeadline>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          {prices.map((props) => (
            <PriceCard
              key={props.title}
              {...props}
              setSuccessSubmit={setSuccess}
              setErrorSubmit={setError}
            />
          ))}
        </Grid>
      </Grid>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </Grid>
  );
};

export default Pricing;
