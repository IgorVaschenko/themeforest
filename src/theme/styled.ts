import styled from 'styled-components';

export const Banner = styled.div<{ image: string; height: string; width?: string }>`
  position: relative;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => height}px;
  background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${({ image }) => image}.png);
  background-size: cover;
`;
