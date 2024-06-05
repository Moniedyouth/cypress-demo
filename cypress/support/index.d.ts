// cypress/support/index.d.ts

declare namespace Cypress {
    interface Chainable<Subject> {
      validateSchema(schema: object, data: object): Chainable<Subject>;
      interceptEngagementRings(): Chainable<Subject>;
    }
  }
  