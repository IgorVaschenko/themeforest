import styled from 'styled-components';

import { Stack } from '@mui/material';
import { themeParams } from 'theme';

export const Post = styled(Stack)`
  margin
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  & > blockquote {
    margin-left: ${themeParams.spaces[5]};
    padding-left: ${themeParams.spaces[3]};
    border-left: 4px solid ${themeParams.colors.primary};
    color: ${themeParams.colors.black};
    font-size: 20px;
    line-height: 33px;
    font-weight: 400;
  }
  & strong {
    color: ${themeParams.colors.primary};
    font-weight: normal;
    text-decoration: underline;
  }
`;

export const NewsHeader = styled.div<{ isMatch: boolean }>`
  background-color: ${({ isMatch }) =>
    isMatch ? themeParams.bgColor.default : themeParams.bgColor.grey};
  padding-bottom: 20px;
`;
