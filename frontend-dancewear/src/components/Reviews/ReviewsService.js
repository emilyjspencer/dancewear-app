import http from "./http-requests";

const getAll = () => {
  return http.get("/reviews");
};

const get = id => {
  return http.get(`/reviews/${id}`);
};

const create = data => {
  return http.post("/reviews", data);
};

const update = (id, data) => {
  return http.put(`/reviews/${id}`, data);
};

const remove = id => {
  return http.delete(`/reviews/${id}`);
};

const removeAll = () => {
  return http.delete(`/reviews`);
};


const ReviewsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default ReviewsService;