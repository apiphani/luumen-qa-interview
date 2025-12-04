// ***********************************************************
// Cypress Component Testing Support File
// ***********************************************************

import './commands';

import React from 'react';
import { mount } from 'cypress/react18';
import { MockedProvider } from '@apollo/client/testing';

// Import Ant Design styles
import 'antd/dist/reset.css';

// Make mount available globally
Cypress.Commands.add('mount', mount);

// Custom mount command with Apollo MockedProvider
Cypress.Commands.add('mountWithApollo', (component, mocks = [], options = {}) => {
  const { apolloOptions = {}, ...mountOptions } = options;

  return mount(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      {...apolloOptions}
    >
      {component}
    </MockedProvider>,
    mountOptions
  );
});
