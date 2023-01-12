import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { themeParams } from 'theme';

export const TestimonialCard = styled(Link)`
  max-width: 320px;
  margin-right: 10px;
  &:hover {
    ${themeParams.raisedEffect}
  }
`;
