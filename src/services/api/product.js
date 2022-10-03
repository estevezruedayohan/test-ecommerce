import axios from 'axios';
import endPoints from '@services/api';
// import { ArchiveBoxIcon } from '@heroicons/react/24/solid';

const addProduct = async(body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProduct, body, config);
  return response.data;
}

export { addProduct };