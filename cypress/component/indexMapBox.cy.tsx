import React from 'react';

import MapBox from '../../src/components/MapBox';

describe('<MapBox />', () => {
  it('renders', () => {
    cy.mount(<MapBox />);
  });
});
