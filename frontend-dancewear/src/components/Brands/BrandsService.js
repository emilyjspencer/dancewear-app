import http from "./http-requests";

const getAll = () => {
  return http.get("/brands");
};

const get = id => {
  return http.get(`/brands/${id}`);
};

const create = data => {
  return http.post("/brands", data);
};

const update = (id, data) => {
  return http.put(`/brands/${id}`, data);
};

const remove = id => {
  return http.delete(`/brands/${id}`);
};

const removeAll = () => {
  return http.delete(`/brands`);
};

const findByName = name => {
  return http.get(`/brands?name=${name}`);
};

const BrandsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default BrandsService;