import { Router, Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../../utility/response.handler";
import contactService from "./contacts.service";
import { CONTACT_MESSAGES } from "./contacts.constants";

export const ContactRouter = Router();

ContactRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("INroutes");
      const result = await contactService.addContact_service(req.body);
      console.log("OUTroutes");
      res.send(new ResponseHandler(result, CONTACT_MESSAGES.CONTACT_ADD));
    } catch (e) {
      next(e);
    }
  }
);
