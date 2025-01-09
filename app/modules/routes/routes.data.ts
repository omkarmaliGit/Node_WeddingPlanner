import { ContactRouter } from "../contacts/contacts.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [new Route("/contact", ContactRouter)];
