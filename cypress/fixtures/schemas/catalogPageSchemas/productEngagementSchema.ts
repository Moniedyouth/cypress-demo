const productEngagementSchema: object = {
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
          "blocks": { "type": ["array", "null"] },
          "translations": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "language_id": { "type": "integer" },
                "title": { "type": "string" },
                "subtitle": { "type": "string" },
                "short_description": { "type": "string" },
                "description": { "type": "string" },
                "meta_title": { "type": "string" },
                "meta_description": { "type": "string" },
                "meta_keywords": { "type": "string" }
              },
              "required": ["id", "language_id", "title", "subtitle", "short_description", "description", "meta_title", "meta_description", "meta_keywords"]
            }
          }
        },
        "required": ["id", "slug", "status", "view_type", "translations"]
      },
      "meta": {
        "type": "array",
        "items": { "type": "object" }
      }
    },
    "required": ["data", "meta"]
  };
  
  export default productEngagementSchema;
  