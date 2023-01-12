import styled from 'styled-components';

import { InputBase, Paper } from '@mui/material';
import { themeParams } from 'theme';

export const Input = styled(InputBase)`
  margin-left: ${themeParams.spaces[1]};
  flex: 1;
`;

export const SubscribeContainer = styled(Paper)`
  padding: ${themeParams.spaces[1]} ${themeParams.spaces[2]};
  margin: ${themeParams.spaces[1]} ${themeParams.spaces[0]};
  background-color: ${themeParams.colors.black};
  display: flex;
  align-items: center;
  min-width: 445px;
  min-height: 54px;
`;
