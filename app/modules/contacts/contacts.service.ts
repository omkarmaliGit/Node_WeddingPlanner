import contactRepo from "./contacts.repo";
import { IContact } from "./contacts.types";

const addContact_service = async (contactData: IContact) => {
  const newContact: IContact = {
    name: contactData.name,
    email: contactData.email,
    message: contactData.message,
    deletedAt: null,
  };

  const contact = await contactRepo.addContact_repo(newContact);
  return contact;
};

export default {
  addContact_service,
};
