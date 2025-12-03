import React from 'react';
import InstanceMonitor from '../../src/components/InstanceMonitor';
import { GET_INSTANCE, ACKNOWLEDGE_ALERT } from '../../src/graphql/queries';

/**
 * InstanceMonitor Component Tests
 *
 * Write your Cypress component tests below.
 *
 * Available resources:
 * - Fixture data: cy.fixture('instance.json') - contains healthy, degraded, critical, unknown scenarios
 * - Custom mount command: cy.mountWithApollo(<Component />, mocks) - mounts with Apollo MockedProvider
 * - GraphQL queries: GET_INSTANCE, ACKNOWLEDGE_ALERT (imported above)
 *
 * Test requirements:
 * 1. Loading state
 * 2. Successful data display
 * 3. Error handling
 * 4. Refresh functionality
 * 5. Alert acknowledgment
 * 6. Health status color coding
 * 7. Metric display validation
 * 8. User interactions
 * 9. Accessibility attributes
 */

describe('InstanceMonitor Component', () => {
  // Load fixture data before tests
  beforeEach(function () {
    cy.fixture('instance.json').as('instanceData');
  });

  // Example test to get you started:
  it('should render without crashing', function () {
    const mocks = [
      {
        request: {
          query: GET_INSTANCE,
          variables: { id: 'inst-001' },
        },
        result: this.instanceData.healthy,
      },
    ];

    cy.mountWithApollo(<InstanceMonitor instanceId="inst-001" />, mocks);

    // Add your assertions here
    cy.get('.ant-card').should('exist');
  });

  // TODO: Add your tests below
  //
  // Suggested test structure:
  //
  // describe('Loading State', () => {
  //   it('should display loading spinner while fetching data', function () {
  //     // ...
  //   });
  // });
  //
  // describe('Data Display', () => {
  //   it('should display instance name', function () {
  //     // ...
  //   });
  // });
  //
  // ... etc.
});
