import http from "./httpService";

const postNewContact = (data) => {
  return http.post("/contacts", data);
};

export default postNewContact;
