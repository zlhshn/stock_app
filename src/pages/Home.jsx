import React, { useEffect } from "react";
import KPI from "../components/KPI";
import useStock from "../service/useStock";
import AreaCharts from "../components/Charts";

const Home = () => {
  const { getPromise } = useStock();

  useEffect(() => {
    getPromise(["sales", "purchases"]);
  }, []);

  return (
    <>
      <KPI />
      <AreaCharts />
    </>
  );
};

export default Home;
