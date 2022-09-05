import http from "./httpService";

const getAllContacts = () => {
  return http.get("/contacts");
};

export default getAllContacts;
