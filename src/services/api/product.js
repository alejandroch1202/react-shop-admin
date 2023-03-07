import endpoints from '@services/api';

const addProduct = async (body) => {
  const response = await fetch(endpoints.products.addProducts, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  return response;
};

const deleteProduct = async (id) => {
  const response = await fetch(endpoints.products.deleteProduct(id), {
    method: 'DELETE',
  });
  return response;
};

const updateProduct = async (id, body) => {
  const response = await fetch(endpoints.products.updateProduct(id), {
    method: 'PUT',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  return response;
};

export { addProduct, deleteProduct, updateProduct };
