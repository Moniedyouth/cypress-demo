const engagementRingsSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "id": { "type": "integer" },
        "image_id": { "type": ["integer", "null"] },
        "images": { "type": ["array", "null"] },
        "name": { "type": ["string", "null"] },
        "slug": { "type": "string" },
        "status": { "type": "integer" },
        "template_id": { "type": ["integer", "null"] },
        "view_type": { "type": "integer" },
        "medias": { "type": ["array", "null"] },
        "modules": { "type": ["array", "null"] },
        "blocks": {
          "type": "array",
          "items": {
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
                        "title": { "type": "string" },
                        "rightSide": { "type": "boolean" },
                        "bottomMobile": { "type": "boolean" }
                      },
                      "required": ["title", "rightSide", "bottomMobile"]
                    }
                  },
                  "required": ["id", "language_id", "title", "subtitle", "content"]
                }
              },
              "block_type_content": { "type": "array" }
            },
            "required": ["id", "name", "type", "translations", "block_type_content"]
          }
        }
      },
      "required": ["id", "image_id", "images", "name", "slug", "status", "template_id", "view_type", "medias", "modules", "blocks"]
    }
  },
  "required": ["data"]
};

export default engagementRingsSchema;
