"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../handlers/errorHandler");
class PaperController {
    constructor() { }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lessons = { message: " list of all lessions" };
                res.json(lessons);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, "Fetch All Lessons failed.");
            }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lesson = { message: "one lession" };
                res.json(lesson);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `Lessons in course ${req.params.id} failed.`);
            }
        });
    }
}
exports.default = PaperController;
//# sourceMappingURL=PaperController.js.map