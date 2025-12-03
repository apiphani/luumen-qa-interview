// ***********************************************
// Custom Cypress Commands
// ***********************************************

// Command to wait for loading to complete
Cypress.Commands.add('waitForLoading', () => {
  cy.get('.ant-spin', { timeout: 10000 }).should('not.exist');
});

// Command to check health tag color
Cypress.Commands.add('checkHealthTagColor', (expectedColor) => {
  cy.get('[data-cy="health-tag"]').should('have.class', `ant-tag-${expectedColor}`);
});

// Command to acknowledge an alert
Cypress.Commands.add('acknowledgeAlert', (alertId) => {
  cy.get(`[data-cy="acknowledge-${alertId}"]`).click();
});

// Command to verify metric value
Cypress.Commands.add('verifyMetric', (metricType, expectedValue) => {
  cy.get(`[data-cy="${metricType}-metric"]`).should('contain', `${expectedValue}%`);
});
