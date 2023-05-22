import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/Product.action";
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);

  console.log(data);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const Intensitydata = {
    labels: data.map((el) => el.country),
    datasets: [
      {
        label: "Intensity",
        data: data.map((el) => el.intensity),
        borderWidth: 1,
        backgroundColor: [createColor(255)],
        borderColor: "black",
      },
     
    ],
  };
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
    labels: data.map((el) => el.topic),
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

  const topics = {
    labels: data.map((el) => el.topic),
    datasets: [
      {
        label: "Intensity",
        data: data.map((el) => el.intensity),
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

let selected = document.getElementById("selectValue")

// console.log(selected)

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px",
        }}
      >
        Filter by : -
        <select id="selectValue">
          <option value="intensity">Intensity</option>
          <option value="relevance">Relevance</option>
          <option value="likelihood">Likelihood</option>
        </select>
      </div>
      <h1 style={{ fontSize: "larger", fontWeight: "bold" }}>
        Intensity and Relevance of countries in this period
      </h1>
      <Line data={Intensitydata} options={options}></Line>;
      <hr color="black" style={{ margin: "50px" }} />
      <h1 style={{ fontSize: "larger", fontWeight: "bold" }}>
        Likelihood of countries in this period
      </h1>
      <PolarArea data={Likelihood} options={options}></PolarArea>;
      <hr color="black" style={{ margin: "50px" }} />
      <h1 style={{ fontSize: "larger", fontWeight: "bold" }}>
        Years Start and Ended insights of countries
      </h1>
      <Line data={years} options={options}></Line>;
      <hr color="black" style={{ margin: "50px" }} />
      <h1 style={{ fontSize: "larger", fontWeight: "bold" }}>
        Intensity on these topics in the period
      </h1>
      <Radar data={topics} options={options}></Radar>;
    </div>
  );
};

export default Charts;
