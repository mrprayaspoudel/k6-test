import { Router } from "express";
import PaperController from "../controllers/PaperController";

class PaperRoutes {
  paperController = new PaperController();
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route("/").get(this.paperController.get);
    this.router.route("/:id").get(this.paperController.getOne);
  }
}

export default new PaperRoutes().router;
