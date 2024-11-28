import React, { useEffect, useState, Suspense } from "react";
import LoadingImage from "../components/Loading";

const Card = React.lazy(() => import("../components/Card"));
const Home = () => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageindex] = useState(1);
  const [loading, setLoading] = useState(false);

  //fetching data on pageIndex changed
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch(
        `https://dummyjson.com/products?limit=12&skip=${pageIndex * 12}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData((prev) => [...prev, ...res?.products]);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    fetchData();
  }, [pageIndex]);

  // load data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // on scroll logic
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPageindex((prev) => prev + 1);
    }
  };
  // console.log(data);
  return (
    <>
      <h1>Products</h1>
      <Suspense fallback={<LoadingImage />}>
        <Card products={data} />
      </Suspense>
      <br />
      {loading ? <LoadingImage /> : ""}
    </>
  );
};

export default Home;
