import Ajv from 'ajv';
import addFormats from 'ajv-formats';

Cypress.Commands.add('validateSchema', (schema, data) => {
  const ajv = new Ajv();
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    throw new Error('Schema validation error: ' + JSON.stringify(validate.errors));
  }
});
