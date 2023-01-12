import Grid from '@mui/material/Grid';
import { themeParams } from 'theme';
import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';
import { Statistic } from 'types';

type Props = {
  statistics: Statistic[];
  isMatch: boolean;
  short?: boolean;
};

const Statistics = ({ statistics, isMatch, short }: Props) => {
  return (
    <Grid container justifyContent="space-evenly">
      {statistics.slice(0, short ? 3 : 4).map(({ info, label }) => (
        <Grid item key={label}>
          <TfHeadline
            variant={isMatch ? 'h2' : 'h1'}
            component="p"
            color={themeParams.colors.primary}
          >
            {info}
          </TfHeadline>
          <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={themeParams.colors.greyText}>
            {label}
          </TfParagraph>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistics;
