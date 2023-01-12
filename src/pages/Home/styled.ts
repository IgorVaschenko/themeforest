import styled from 'styled-components';

import { themeParams } from 'theme';

import { TfHeadline } from 'themeforest-design-system-react';

export const TfHeadlineStyled = styled(TfHeadline)`
  & span {
    color: #185cff;
  }
`;

export const CircleLinkContainer = styled.div`
  position: absolute;
  top: -${themeParams.spaces[5]};
  right: 25%;
`;
