import http from "./http-requests";

const getAll = () => {
  return http.get("/categories");
};

const get = id => {
  return http.get(`/categories/${id}`);
};

const create = data => {
  return http.post("/categories", data);
};

const update = (id, data) => {
  return http.put(`/categories/${id}`, data);
};

const remove = id => {
  return http.delete(`/categoriess/${id}`);
};

const removeAll = () => {
  return http.delete(`/categories`);
};



const CategoriesService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default CategoriesService;