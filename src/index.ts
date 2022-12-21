import { Application, urlencoded, json } from "express";
import * as helmet from "helmet";
import * as winston from "winston";

import rateLimiter from "./middlewares/rateLimit";
import { unCoughtErrorHandler } from "./handlers/errorHandler";
import Routes from "./routes";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(helmet());
    app.use(rateLimiter());
    app.use(unCoughtErrorHandler);
  }
}

process.on("beforeExit", function (err) {
  winston.error(JSON.stringify(err));
  console.error(err);
});
