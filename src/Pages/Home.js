import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <>
      <h1>Products</h1>
      <Card products={data?.products} />
    </>
  );
};

export default Home;
