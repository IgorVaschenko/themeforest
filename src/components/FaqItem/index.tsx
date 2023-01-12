import React from 'react';

import { Typography } from '@mui/material';

import { themeParams } from 'theme';
import { TfHeadline, TfIcons } from 'themeforest-design-system-react';

import { Container, FaqTitle } from './styled';
import { Props } from './types';

const FaqItem = ({ isActive, title, description, handleClick }: Props) => {
  return (
    <Container variant="outlined">
      <FaqTitle
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleClick}
      >
        <TfHeadline
          variant="h6"
          color={isActive ? `${themeParams.colors.primary}` : `${themeParams.colors.black}`}
        >
          {title}
        </TfHeadline>
        <TfIcons iconName={isActive ? 'icon_minus_blue' : 'icon_plus'} />
      </FaqTitle>
      {isActive && <Typography variant="subtitle1">{description}</Typography>}
    </Container>
  );
};

export default React.memo(FaqItem);
