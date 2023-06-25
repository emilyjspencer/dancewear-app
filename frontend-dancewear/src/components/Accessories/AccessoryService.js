import http from "./http-requests";

const getAll = () => {
  return http.get("/accessories");
};

const get = id => {
  return http.get(`/accessories/${id}`);
};

const create = data => {
  return http.post("/accessories", data);
};

const update = (id, data) => {
  return http.put(`/accessories/${id}`, data);
};

const remove = id => {
  return http.delete(`/accessories/${id}`);
};

const removeAll = () => {
  return http.delete(`/accessories`);
};

const findByName = name => {
  return http.get(`/accessories?name=${name}`);
};

const AccessoryService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default AccessoryService;