import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/Product.action";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const IntensityChart = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);

  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const Intensity = {
    labels: data.map((el) => el.sector),
    datasets: [
      {
        label: "Intensity",
        data: data.map((el) => el.intensity),
        borderWidth: 3,
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
        borderColor: "white",
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
        Intensity in these years
      </h1>
      <Doughnut data={Intensity} options={options}></Doughnut>;
      <hr color="black" />
    </div>
  );
};

export default IntensityChart;
