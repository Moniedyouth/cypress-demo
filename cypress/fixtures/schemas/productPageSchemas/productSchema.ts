const productSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": { "type": "integer" },
          "status": { "type": "integer" },
          "slug": { "type": "string" },
          "vendor_model": { "type": "string" },
          "base_cost": { "type": "number" },
          "track_inventory": { "type": "boolean" },
          "engraving": { "type": "boolean" },
          "details_required": { "type": "boolean" },
          "genders": { "type": "array", "items": { "type": "string" } },
          "age_groups": { "type": "array", "items": { "type": "string" } },
          "embedded": { "type": "boolean" },
          "sort_order": { "type": "integer" },
          "default_sku": { "type": "string" },
          "customer_number": { "type": "string" },
          "sale": { "type": "boolean" },
          "bestseller": { "type": "boolean" },
          "material_categories": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "slug": { "type": "string" },
                "sku": { "type": "string" },
                "status": { "type": "integer" },
                "translations": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "language_id": { "type": "integer" },
                      "title": { "type": "string" },
                      "subtitle": { "type": ["string", "null"] }
                    },
                    "required": ["language_id", "title"]
                  }
                }
              },
              "required": ["id", "slug", "sku", "status", "translations"]
            }
          },
          "images": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "url": { "type": "string" },
                "media_type": { "type": "string" }
              },
              "required": ["id", "url", "media_type"]
            }
          }
        },
        "required": ["id", "status", "slug", "vendor_model", "base_cost", "track_inventory", "engraving", "details_required", "genders", "age_groups", "embedded", "sort_order", "default_sku", "customer_number", "sale", "bestseller", "material_categories", "images"]
      }
    },
    "required": ["data"]
  }  
  
  export default productSchema;
  