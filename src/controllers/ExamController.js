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
class ExamController {
    constructor() { }
    get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = { message: "lists " };
                res.json(list);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, "issue on fetching lists");
            }
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const details = { list: "course name" };
                if (details) {
                    return res.json(details);
                }
                else {
                    res.status(404).send(`Lesson ${req.params.id} not found.`);
                }
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `Course ${req.params.id} is failed.`);
            }
        });
    }
}
exports.default = ExamController;
//# sourceMappingURL=ExamController.js.map