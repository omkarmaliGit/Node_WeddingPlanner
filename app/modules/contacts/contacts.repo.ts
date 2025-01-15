import { appDataSource } from "../../connection/postgres.connect";
import { ContactEntity } from "./contacts.schema";
import { IContact } from "./contacts.types";

const contactModel = appDataSource.getRepository(ContactEntity);

const addContact_repo = (contactData: IContact) => {
  contactModel.insert(contactData);
};

export default {
  addContact_repo,
};
