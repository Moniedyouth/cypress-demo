const productQuestionFormSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": { "type": "integer" },
          "name": { "type": "string" },
          "type": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "identifier": { "type": "string" }
            },
            "required": ["name", "identifier"]
          },
          "translations": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "language_id": { "type": "integer" },
                "title": { "type": "string" },
                "subtitle": { "type": "string" },
                "content": {
                  "type": "object",
                  "properties": {
                    "email": { "type": "string" },
                    "title": { "type": "string" },
                    "subject": { "type": "string" },
                    "full_name": { "type": "string" },
                    "last_name": { "type": "string" },
                    "text_area": { "type": "string" },
                    "button_text": { "type": "string" }
                  },
                  "required": ["email", "title", "subject", "full_name", "last_name", "text_area", "button_text"]
                }
              },
              "required": ["id", "language_id", "title", "subtitle", "content"]
            }
          },
          "block_type_content": {
            "type": "array",
            "items": { "type": "object" }
          }
        },
        "required": ["id", "name", "type", "translations", "block_type_content"]
      },
      "meta": {
        "type": "array",
        "items": { "type": "object" }
      }
    },
    "required": ["data", "meta"]
  };
  
  export default productQuestionFormSchema;
  