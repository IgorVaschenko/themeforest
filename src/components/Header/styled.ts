import styled from 'styled-components';

import { themeParams } from 'theme';

export const HeaderContainer = styled.div<{ isMatch: boolean }>`
  background-color: ${({ isMatch }) =>
    isMatch ? themeParams.bgColor.default : themeParams.bgColor.grey};
  padding-bottom: 20px;
`;
