"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helmet = require("helmet");
const winston = require("winston");
const rateLimit_1 = require("./middlewares/rateLimit");
const errorHandler_1 = require("./handlers/errorHandler");
const routes_1 = require("./routes");
class Server {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        app.use(express_1.urlencoded({ extended: true }));
        app.use(express_1.json());
        app.use(helmet());
        app.use(rateLimit_1.default());
        app.use(errorHandler_1.unCoughtErrorHandler);
    }
}
exports.default = Server;
process.on("beforeExit", function (err) {
    winston.error(JSON.stringify(err));
    console.error(err);
});
//# sourceMappingURL=index.js.map