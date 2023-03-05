import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endpoint).then((res) => res.json());
    setData(response);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
