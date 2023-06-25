import React from 'react';
import { mount } from 'cypress/react18';
import Button from '.';

describe('if exists text', () => {
  it('should return value', () => {
    mount(<Button text="Subscribe to montly newsletter" />);
    cy.get('.newsletter-btn').should(
      'have.text',
      'Subscribe to montly newsletter',
    );
  });
});

describe('if not exists text', () => {
  it('should return button without text', () => {
    mount(<Button />);
    cy.get('.newsletter-btn').should('be.visible');
  });
});
