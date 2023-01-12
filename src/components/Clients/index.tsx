import Grid from '@mui/material/Grid';
import { Banner } from 'theme';

import { Props } from './types';

const Clients = ({ isMatch, clients }: Props) => {
  return (
    <Grid container spacing={2}>
      {clients.slice(0, isMatch ? 3 : 6).map((client: string) => (
        <Grid item md={2} xs={4} key={client}>
          <Banner image={client} height={isMatch ? '65' : '132'} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Clients;
