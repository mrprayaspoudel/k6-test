import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";

export default class ExamController {
  constructor() {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const list = { message: "lists " };
      res.json(list);
    } catch (error) {
      apiErrorHandler(error, req, res, "issue on fetching lists");
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const details = { list: "course name" };

      if (details) {
        return res.json(details);
      } else {
        res.status(404).send(`Lesson ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, req, res, `Course ${req.params.id} is failed.`);
    }
  }
}
