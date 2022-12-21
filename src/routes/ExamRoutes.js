"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExamController_1 = require("../controllers/ExamController");
class ExamRoutes {
    constructor() {
        this.examController = new ExamController_1.default();
        this.router = express_1.Router();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route("/").get(this.examController.get);
        this.router.route("/:id").get(this.examController.getOne);
    }
}
exports.default = new ExamRoutes().router;
//# sourceMappingURL=ExamRoutes.js.map