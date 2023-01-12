import styled from 'styled-components';

import { themeParams } from 'theme';

export default styled.div`
  padding: ${themeParams.spaces[1]};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${themeParams.spaces[3]};
  background-color: ${themeParams.colors.error};
`;
