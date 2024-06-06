const productCatalogSchema: object = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "data": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": { "type": "integer" },
            "customer_number": { "type": "string" },
            "vendor_model": { "type": "string" },
            "slug": { "type": "string" },
            "status": { "type": "integer" },
            "base_cost": { "type": "number" },
            "base_compare_at": { "type": "number" },
            "sale": { "type": "boolean" },
            "sale_value": { "type": "string" },
            "default_sku": { "type": "string" },
            "engraving": { "type": "boolean" },
            "sku": { "type": ["string", "null"] },
            "embedded": { "type": "boolean" },
            "certificate_url": { "type": "string" },
            "certificate_number": { "type": "string" },
            "view360_url": { "type": "string" },
            "images": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": { "type": "integer" },
                  "url": { "type": "string" },
                  "url_original": { "type": "string" },
                  "device": { "type": "integer" },
                  "media_type": { "type": "string" },
                  "original_name": { "type": "string" }
                },
                "required": ["id", "url", "device", "media_type"]
              }
            },
            "og_image": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "url": { "type": "string" },
                "url_original": { "type": "string" },
                "device": { "type": "integer" },
                "media_type": { "type": "string" },
                "original_name": { "type": "string" }
              },
              "required": ["id", "url", "device", "media_type"]
            },
            "translations": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": { "type": "integer" },
                  "language_id": { "type": "integer" },
                  "title": { "type": "string" },
                  "subtitle": { "type": ["string", "null"] },
                  "short_description": { "type": "string" },
                  "description": { "type": "string" },
                  "meta_title": { "type": "string" },
                  "meta_description": { "type": "string" },
                  "meta_keyword": { "type": ["string", "null"] }
                },
                "required": ["id", "language_id", "title"]
              }
            }
          },
          "required": ["id", "customer_number", "vendor_model", "slug", "status"]
        }
      }
    },
    "required": ["data"]
  };
  
  export default productCatalogSchema;
  