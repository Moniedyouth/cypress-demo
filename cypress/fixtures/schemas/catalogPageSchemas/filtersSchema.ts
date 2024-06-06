const filtersSchema: object = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "collections": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": { "type": "integer" },
              "slug": { "type": "string" },
              "sort_order": { "type": "integer" },
              "sort_order_header": { "type": "integer" },
              "sort_order_footer": { "type": "integer" },
              "medias": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "position": { "type": "string" },
                    "alt": { "type": "string" },
                    "file": {
                      "type": "object",
                      "properties": {
                        "id": { "type": "integer" },
                        "url": { "type": "string" },
                        "url_original": { "type": "string" },
                        "device": { "type": "integer" },
                        "media_type": { "type": "string" },
                        "original_name": { "type": "string" }
                      },
                      "required": ["id", "url", "url_original", "device", "media_type", "original_name"]
                    },
                    "sort_order": { "type": "integer" }
                  },
                  "required": ["position", "alt", "file", "sort_order"]
                }
              },
              "show_filter": { "type": "boolean" },
              "translations": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "integer" },
                    "collection_id": { "type": "integer" },
                    "language_id": { "type": "integer" },
                    "title": { "type": "string" },
                    "short_description": { "type": "string" },
                    "description": { "type": "string" },
                    "meta_title": { "type": "string" },
                    "meta_description": { "type": "string" },
                    "meta_keywords": { "type": "string" }
                  },
                  "required": ["id", "collection_id", "language_id", "title", "meta_title", "meta_description", "meta_keywords"]
                }
              }
            },
            "required": ["id", "slug", "sort_order", "sort_order_header", "sort_order_footer", "medias", "show_filter", "translations"]
          }
        }
      },
      "required": ["collections"]
    },
    "meta": {
      "type": "array",
      "items": { "type": "object" }
    }
  },
  "required": ["data", "meta"]
};

export default filtersSchema;
