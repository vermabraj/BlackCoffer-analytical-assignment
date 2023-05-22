import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/Product.action";
import { Bar, Bubble, Chart, Line, Radar, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const LikelihoodChart = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);

  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  
  const Likelihood = {
    labels: data.map((el) => el.country),
    datasets: [
      {
        label: "Intensity",
        data: data.map((el) => el.likelihood),
        borderWidth: 1,
        backgroundColor: [createColor(255)],
        borderColor: "black",
      },
    ],
  };
  const years = {
    labels: data.map((el) => el.sector),
    datasets: [
      {
        label: "Started Year",
        data: data.map((el) => el.start_year),
        borderWidth: 1,
        backgroundColor: [createColor(255)],
        borderColor: "black",
      },
      {
        label: "Ended Year",
        data: data.map((el) => el.end_year),
        borderWidth: 1,
        backgroundColor: [createColor(255)],
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
      <Radar data={Likelihood} options={options}></Radar>;
      <hr color="black" />
    </div>
  );
};

export default LikelihoodChart;
