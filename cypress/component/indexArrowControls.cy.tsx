import React from 'react';

import ArrowControls from '../../src/components/ArrowControls';

describe('<ArrowControls />', () => {
  it('renders', () => {
    cy.mount(<ArrowControls isMatch={false} props={[() => {}, () => {}, true, true]} />);
  });
});
