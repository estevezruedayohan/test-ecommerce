import FormProduct from '@components/FormProduct';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'; // hook para traer el id
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit(){
  const router = useRouter();
  const [product, setProduct] = useState({}); 

  useEffect(() => {
    const { id } = router.query;
    if(!router.isReady) return;
    async function getProduct(){
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    };
    getProduct();
    
  }, [router?.isReady]);

  return (
    <>
      <FormProduct product={product}/>
    </>
  );
};