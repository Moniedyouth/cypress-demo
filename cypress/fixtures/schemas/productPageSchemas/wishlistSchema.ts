const wishlistSchema: object = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "user_id": {
            "type": ["integer", "null"]
          },
          "unique_id": {
            "type": "string"
          },
          "created_by": {
            "type": ["string", "null"]
          },
          "baggage": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "sku": {
                  "type": "string"
                },
                "cost": {
                  "type": "number"
                },
                "slug": {
                  "type": "string"
                },
                "price": {
                  "type": "number"
                },
                "title": {
                  "type": "string"
                },
                "images": {
                  "type": "string"
                }
              },
              "required": ["sku", "cost", "slug", "price", "title", "images"]
            }
          }
        },
        "required": ["id", "user_id", "unique_id", "created_by", "baggage"]
      }
    },
    "required": ["data"]
  }

  export default wishlistSchema;
