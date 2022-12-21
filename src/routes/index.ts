import { Application } from "express";
import examRouter from "./ExamRoutes";
import paperRoute from "./PaperRoutes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/exams", examRouter);
    app.use("/api/papers", paperRoute);
  }
}
