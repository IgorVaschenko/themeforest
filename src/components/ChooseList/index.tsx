import { Fragment } from 'react';

import Grid from '@mui/material/Grid';

import { themeParams } from 'theme';
import { TfHeadline, TfIcons, TfParagraph } from 'themeforest-design-system-react';

import { Props } from './types';

const ChooseList = ({ chooseItems }: Props) => (
  <Grid container direction="column" spacing={1}>
    {chooseItems.map(({ title, subtitle }) => (
      <Fragment key={title}>
        <Grid container spacing={1} alignItems="center" mb={-3}>
          <Grid item>
            <TfIcons iconName="icon_checkmark_blue" />
          </Grid>
          <Grid item>
            <TfHeadline variant="h6" component="p" color={themeParams.colors.black}>
              {title}
            </TfHeadline>
          </Grid>
        </Grid>
        {subtitle && (
          <TfParagraph
            variant="p2"
            component="p"
            color={themeParams.colors.greyText}
            style={{ maxHeight: '80px', overflow: 'hidden' }}
          >
            {subtitle}
          </TfParagraph>
        )}
      </Fragment>
    ))}
  </Grid>
);

export default ChooseList;
