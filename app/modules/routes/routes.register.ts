import { Application, json, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { routes } from "./routes.data";
import { ResponseHandler } from "../../utility/response.handler";

export const registerRoutes = (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(json());

  for (let route of routes) {
    app.use(route.path, route.router);
  }

  // Error Handling Middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
  });
};
