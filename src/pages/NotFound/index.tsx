import { Grid } from '@mui/material';
import { TfHeadline } from 'themeforest-design-system-react';
const NotFound = () => {
  return (
    <Grid container justifyContent="center">
      <TfHeadline variant="h1" style={{ m: '0 auto' }} color="red">
        Not Found
      </TfHeadline>
    </Grid>
  );
};

export default NotFound;
