const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Tracks - Express API with Swagger (OpenAPI 3.0)",
            version: "0.1.0",
            description: "This is a CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "pablo",
                url: "https://u-tad.com",
                email: "kenyi.rui22@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer"
                },
            },
            schemas: {
                user: {
                    type: "object",
                    required: ["name", "age", "email", "password"],
                    properties: {
                        name: {
                            type: "string",
                            example: "Menganito"
                        },
                        age: {
                            type: "integer",
                            example: 20
                        },
                        email: {
                            type: "string",
                            example: "miemail@google.com"
                        },
                        password: {
                            type: "string"
                        },
                    },
                },
                login: {
                    type: "object",
                    required: ["email", "password"],
                    properties: {
                        email: {
                            type: "string",
                            example: "miemail@google.com"
                        },
                        password: {
                            type: "string"
                        },
                    }
                },
                tracks: {
                    type: "object",
                    required: ["name", "album", "cover", "artist", "duration", "mediaId"],
                    properties: {
                        name: {
                            type: "string",
                            example: "juan"
                        },
                        album: {
                            type: "string",
                            example: "Album Name"
                        },
                        cover: {
                            type: "string",
                            example: "https://example.com/cover.jpg"
                        },
                        artist: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    example: "Artist Name"
                                },
                                nickname: {
                                    type: "string",
                                    example: "Nickname"
                                },
                                nationality: {
                                    type: "string",
                                    example: "Nationality"
                                }
                            }
                        },
                        duration: {
                            type: "object",
                            properties: {
                                start: {
                                    type: "integer",
                                    example: 0
                                },
                                end: {
                                    type: "integer",
                                    example: 240
                                }
                            }
                        },
                        mediaId: {
                            type: "string",
                            example: "eoertpgsferg"
                        }
                    },
                },
            },
        },
    },
    apis: ["./routes/*.js"]
};

module.exports = swaggerJsdoc(options);
