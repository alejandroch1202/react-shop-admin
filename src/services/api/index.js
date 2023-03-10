const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) =>
      `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories`,
    addCategory: `${API}/api/${VERSION}/categories`,
    getCategoriesProduct: (id) =>
      `${API}/api/${VERSION}/categories/${id}/products`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload`,
    getImage: (fileName) => `${API}/api/${VERSION}/${fileName}`,
  },
};

export default endpoints;
