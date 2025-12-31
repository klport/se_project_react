import { baseUrl } from "./constants";

const request = (url, options = {}) => {
  const token = localStorage.getItem("jwt");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetch(url, {
    ...options,
    headers,
  }).then(handleServerResponse);
};

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error; ${res.status}`);
};

function getItems() {
  return request(`${baseUrl}/items`);
}

function addItem({ name, imageUrl, weather }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

function deleteItem(itemId) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
  });
}

function addCardLike(itemId) {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
  });
}
function deleteCardLike(itemId) {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
  });
}

export {
  getItems,
  addItem,
  deleteItem,
  handleServerResponse,
  addCardLike,
  deleteCardLike,
  baseUrl,
};
