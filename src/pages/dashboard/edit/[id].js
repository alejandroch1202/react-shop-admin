import React, { useEffect, useState } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import endpoints from '@services/api';

const Edit = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct() {
      const response = await fetch(endpoints.products.getProduct(id));
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, [router.query, router?.isReady]);

  return (
    <>
      <FormProduct product={product} />
    </>
  );
};

export default Edit;
