const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;


const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products:{
    listProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    // addProduct: (product) => `${API}/api/${VERSION}/products`,
    updateProducto: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducto: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users:{
    getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    // createUser: (user) => `${API}/api/${VERSION}/users`,
    // doExist: (email) => `${API}/api/${VERSION}/users/is-available`,
  },
  categories:{
    listCategories: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    // addCategorie: (categorie) => `${API}/api/${VERSION}/categories`,
    getCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    // filterProductByCategorie: (idCat,limit,offset) => `${API}/api/${VERSION}/categories/${idCat}/products?limit=${limit}?offset=${offset}`,
  },
  files:{
    getFile: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
    uploadFile: `${API}/api/${VERSION}/files/upload`,
  },
};

export default endPoints;
