
# Cypress Demo Project

This project is a demonstration of end-to-end testing using Cypress. It includes basic tests for a sample application.

## Project Structure

- `cypress/`: Contains the Cypress tests and configurations.
  - `downloads/`: Directory for files downloaded during tests.
  - `fixtures/`: Test data files.
    - `schemas/`: Schemas for data validation.
  - `helpers/`: Helper functions for tests.
  - `integration/`: Integration tests.
    - `e2e/`: End-to-end test specifications.
  - `pages/`: Page objects for easier test writing.
    - `common/`: Common functions and utilities for working with page elements.
  - `support/`: Cypress support files.
- `utils/`: Utilities for tests.
- `cypress.config.js`: Cypress configuration file.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installing Dependencies

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd cypress-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

To run the Cypress tests, use the following command:

```bash
npm run test
```
or open at chrome

```bash
npm run cypress:open
```

This will open the Cypress Test Runner, allowing you to run the tests interactively.

### Running Tests in Headless Mode

For CI/CD pipelines or automated test execution, you can run Cypress in headless mode:

```bash
npm run test:headless
```

## Tests

### Tests for the Catalog Page

1. **Product Catalog Schema Validation**
   - Validates product catalog data against a JSON schema.
   - Endpoint: `api/v1/system-catalog/engagement**`
   - File: `cypress/fixtures/schemas/catalogPageSchemas/productCatalogSchema.ts`

2. **Product Engagement Schema Validation**
   - Validates product engagement data against a JSON schema.
   - Endpoint: `api/v1/pages/engagement`
   - File: `cypress/fixtures/schemas/catalogPageSchemas/productEngagementSchema.ts`

### Tests for the Product Page

1. **Product Schema Validation**
   - Validates product data against a JSON schema.
   - Endpoint: `api/v1/products/jednoduchynahrdelnikspismenomnaretiazke`
   - File: `cypress/fixtures/schemas/productPageSchemas/productSchema.ts`

2. **Product Ask Question Schema Validation**
   - Validates product ask question form data against a JSON schema.
   - Endpoint: `api/v1/blocks/product-ask-question`
   - File: `cypress/fixtures/schemas/productPageSchemas/productAskQuestionSchema.ts`

3. **Product Question Form Schema Validation**
   - Validates product question form data against a JSON schema.
   - Endpoint: `api/v1/blocks/product-question-form`
   - File: `cypress/fixtures/schemas/productPageSchemas/productQuestionFormSchema.ts`

4. **Product Ship Return Schema Validation**
   - Validates product shipping and return data against a JSON schema.
   - Endpoint: `api/v1/blocks/product-ship-return`
   - File: `cypress/fixtures/schemas/productPageSchemas/productShipReturnSchema.ts`

