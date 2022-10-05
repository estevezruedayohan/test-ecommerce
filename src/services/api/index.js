const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;


const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products:{
    listProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    addProduct: `${API}/api/${VERSION}/products`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users:{
    getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    createUser: `${API}/api/${VERSION}/users`,
    isExistUser: `${API}/api/${VERSION}/users/is-available`,
  },
  categories:{
    listCategories: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    addCategorie: `${API}/api/${VERSION}/categories/`,
    getCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductByCategorie: (idCat,limit,offset) => `${API}/api/${VERSION}/categories/${idCat}/products?limit=${limit}?offset=${offset}`,
  },
  files:{
    getImage: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
    addImage: `${API}/api/${VERSION}/files/upload`,
  },
};

export default endPoints;
