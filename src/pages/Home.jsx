import React, { useEffect } from "react";
import KPI from "../components/KPI";
import useStock from "../service/useStock";
import AreaCharts from "../components/Charts";

const Home = () => {
  const { getStock } = useStock();

  useEffect(() => {
    getStock("sales");
    getStock("purchases");
  }, []);

  return (
    <>
      <KPI />
      <AreaCharts />
    </>
  );
};

export default Home;
