import { useState } from 'react';
import Chart from '@common/Chart';
import useFetch from '@hooks/useFetch';
import endpoints from '@services/api';

const PRODUCT_LIMIT = 10;
// const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const products = useFetch(
    endpoints.products.getProducts(PRODUCT_LIMIT, offsetProducts),
    offsetProducts
  );

  const categoryNames = products?.map((product) => product.category);

  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (array) =>
    array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: [
          '#ffbb11',
          '#c0c0c0',
          '#50Af95',
          '#F3ba2f',
          '#2a71d0',
        ],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
