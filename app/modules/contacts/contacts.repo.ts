import { appDataSource } from "../../connection/postgres.connect";
import { ContactEntity } from "./contacts.schema";
import { IContact } from "./contacts.types";

const contactModel = appDataSource.getRepository(ContactEntity);

const addContact_repo = (contactData: IContact) => {
  console.log("INrepo");
  contactModel.insert(contactData);
  console.log("OUTrepo");
};

export default {
  addContact_repo,
};
