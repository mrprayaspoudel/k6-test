import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";

export default class PaperController {
  constructor() {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const lessons = { message: " list of all lessions" };
      res.json(lessons);
    } catch (error) {
      apiErrorHandler(error, req, res, "Fetch All Lessons failed.");
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const lesson = { message: "one lession" };

      res.json(lesson);
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `Lessons in course ${req.params.id} failed.`
      );
    }
  }
}
