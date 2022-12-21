"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExamRoutes_1 = require("./ExamRoutes");
const PaperRoutes_1 = require("./PaperRoutes");
class Routes {
    constructor(app) {
        app.use("/api/exams", ExamRoutes_1.default);
        app.use("/api/papers", PaperRoutes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map