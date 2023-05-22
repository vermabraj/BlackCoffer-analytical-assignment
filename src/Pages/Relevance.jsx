import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/Product.action";
import { Bar, Line, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RelevanceChart = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);

  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const Relevancedata = {
    labels: data.map((el) => el.topic),
    datasets: [
      {
        label: "Relavance",
        data: data.map((el) => el.relevance),
        borderWidth: 1,
        backgroundColor: [
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
          createColor(255),
        ],
        borderColor: "black",
      },
    ],
  };
 


 
  const options = {};

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function createColor(num) {
    return `rgb(${random(num)},${random(num)},${random(num)})`;
  }

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1 style={{ fontSize: "larger", fontWeight: "bolder" }}>
        Likelihood in these years
      </h1>
      <PolarArea data={Relevancedata} options={options}></PolarArea>;
      <hr color="black" />
    </div>
  );
};

export default RelevanceChart;
