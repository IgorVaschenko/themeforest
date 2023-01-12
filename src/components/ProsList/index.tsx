import { Grid } from '@mui/material';

import { TfIcons, TfParagraph } from 'themeforest-design-system-react';

import { Props } from './types';

const ProsList = ({ prosItems }: Props) => (
  <Grid container direction="column" mt={5}>
    {prosItems.map(({ title, subtitle }) => {
      return (
        <Grid container key={title} alignItems="center" mt={-1}>
          <TfIcons iconName="icon_checkmark_blue"></TfIcons>
          <TfParagraph variant="p2">{title}</TfParagraph>
          {subtitle && (
            <TfParagraph variant="subtitle2" component="p" style={{ margin: '16px 0 !important;' }}>
              {subtitle}
            </TfParagraph>
          )}
        </Grid>
      );
    })}
  </Grid>
);

export default ProsList;
