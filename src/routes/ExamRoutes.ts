import { Router } from "express";
import ExamController from "../controllers/ExamController";

class ExamRoutes {
  examController = new ExamController();
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route("/").get(this.examController.get);
    this.router.route("/:id").get(this.examController.getOne);
  }
}

export default new ExamRoutes().router;
