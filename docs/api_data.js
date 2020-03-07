define({ "api": [
  {
    "type": "get",
    "url": "/meta",
    "title": "Get Meta Information",
    "name": "GetMeta",
    "group": "Meta",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "port",
            "description": "<p>The website's port</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The website's version</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n    \"port\": 5959,\n    \"version\": \"9.0.0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "$ curl https://megumin.love/api/meta",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Meta"
  }
] });
