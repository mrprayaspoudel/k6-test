"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PaperController_1 = require("../controllers/PaperController");
class PaperRoutes {
    constructor() {
        this.paperController = new PaperController_1.default();
        this.router = express_1.Router();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route("/").get(this.paperController.get);
        this.router.route("/:id").get(this.paperController.getOne);
    }
}
exports.default = new PaperRoutes().router;
//# sourceMappingURL=PaperRoutes.js.map