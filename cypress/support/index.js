import "./commands"
import './validate-schema-command';

beforeEach(() => {
  cy.intercept("**api/v1/collections**").as("collections");
  cy.intercept("**api/v1/popups**").as("popups");
  cy.intercept('GET', '**api/v1/pages/engagement-rings').as('getEngagementRings');
});
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}