const productShipReturnSchema = {
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
                    "color": {
                      "type": "object",
                      "properties": {
                        "hex": { "type": "string" },
                        "hue": { "type": "number" },
                        "hexa": { "type": "string" },
                        "hsla": {
                          "type": "object",
                          "properties": {
                            "a": { "type": "number" },
                            "h": { "type": "number" },
                            "l": { "type": "number" },
                            "s": { "type": "number" }
                          },
                          "required": ["a", "h", "l", "s"]
                        },
                        "hsva": {
                          "type": "object",
                          "properties": {
                            "a": { "type": "number" },
                            "h": { "type": "number" },
                            "s": { "type": "number" },
                            "v": { "type": "number" }
                          },
                          "required": ["a", "h", "s", "v"]
                        },
                        "rgba": {
                          "type": "object",
                          "properties": {
                            "a": { "type": "number" },
                            "b": { "type": "number" },
                            "g": { "type": "number" },
                            "r": { "type": "number" }
                          },
                          "required": ["a", "b", "g", "r"]
                        },
                        "alpha": { "type": "number" }
                      },
                      "required": ["hex", "hue", "hexa", "hsla", "hsva", "rgba", "alpha"]
                    },
                    "title": { "type": "string" },
                    "content": { "type": "string" },
                    "image_position": { "type": "string" },
                    "background_type": { "type": "integer" }
                  },
                  "required": ["color", "title", "content", "image_position", "background_type"]
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
  
  export default productShipReturnSchema;
  