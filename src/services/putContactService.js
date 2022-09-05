import http from "./httpService";

const putComments = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

export default putComments;
