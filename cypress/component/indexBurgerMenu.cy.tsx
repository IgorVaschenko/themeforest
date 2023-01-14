import { MemoryRouter as Router } from 'react-router-dom';

import React from 'react';

import BurgerMenu from '../../src/components/Burger';

describe('<BurgerMenu />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <BurgerMenu
          toggleDrawer={function (
            open: boolean
          ): (event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>) => void {
            return () => {
              console.log('toggleDrawer');
            };
          }}
        />{' '}
      </Router>
    );
  });
});
