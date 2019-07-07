define({ "api": [
  {
    "type": "get",
    "url": "/articles/:uuid",
    "title": "Request Article information",
    "name": "GetArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Articles unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Identifier of the Article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"uuid\": \"xxxx-xxxx-xxxx-xxxx\",\n  \"title\": \"Image procesing with Computer Vision\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ArticleNotFound",
            "description": "<p>The id of the Article was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ArticleNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./articles/routes.js",
    "groupTitle": "Article"
  },
  {
    "type": "POST",
    "url": "/profiles/",
    "title": "Create new Profile",
    "name": "CreateProfile",
    "group": "Profile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Research's name(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Reseracher's lastname separated by comma.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Valid email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adscription",
            "description": "<p>Institute origin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Student/Researcher/Teacher/Advisor.</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "extra",
            "description": "<p>Profile extra data in JSON format.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Identifier of the Profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Research's name(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"uuid\": \"xxxx-xxxx-xxxx-xxxx\",\n  \"name\": \"Mauricio Gabriel\",\n   ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Resource cannot be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./profiles/routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "GET",
    "url": "/profiles/:uuid",
    "title": "Request Profile information",
    "name": "GetProfile",
    "group": "Profile",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Profile identifier</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Identifier of the Profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Research's name(s).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"uuid\": \"xxxx-xxxx-xxxx-xxxx\",\n  \"name\": \"Mauricio Gabriel\",\n   ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>Resource does not exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ProfileNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./profiles/routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "GET",
    "url": "/profiles",
    "title": "Get list of profiles",
    "name": "GetProfiles",
    "description": "<p>Get list of profiles that match query or pagination parameters</p>",
    "group": "Profile",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET http://localhost/profiles // return all profiles\nGET http://localhost/profiles?role=Researcher // return all profile with role equals to 'Researcher'\nGET http://localhost/profiles?offset=0&limit=10 // return a paginated list",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Research's name(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Reseracher's lastname separated by comma.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Valid email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adscription",
            "description": "<p>Institute origin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Student/Researcher/Teacher/Advisor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Pagination's offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Pagination's limit.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\": 10,\n  \"rows\": [\n     ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Bad Request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./profiles/routes.js",
    "groupTitle": "Profile"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_rnovelo_Desktop_AAAI_Chapter_aaaimx_api_apidoc_main_js",
    "groupTitle": "_home_rnovelo_Desktop_AAAI_Chapter_aaaimx_api_apidoc_main_js",
    "name": ""
  }
] });
