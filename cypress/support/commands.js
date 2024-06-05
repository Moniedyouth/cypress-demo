Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    originalFn(url, options);
    cy.wait(10000);
});
