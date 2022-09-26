import "./App.css";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function App() {
  const [file, setFile] = useState([{ categories: "", data: "" }]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  const options = {
    chart: {
      id: "realtime",
      type: "line",
      height: 350,
      animations: {
        enabled: false,
        easing: "linear",
        dynamicAnimation: {
          speed: 0,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: file.map((item) => item.categories),
    },
    markers: {
      size: 0,
    },
  };

  const series = [
    {
      data: file.map((item) => item.data),
    },
  ];

  function getDateNow() {
    let date = new Date();
    let tanggal = date.getDate();
    let bulan = date.getMonth();
    let tahun = date.getFullYear();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getMinutes();
    return `${tanggal} ${bulan} ${tahun} - ${jam} : ${menit} : ${detik}`;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setTimeout(() => {
      let dataInput = [...file.map((item) => item.data), getRandomInt(30)];
      let categoriesInput = [
        ...file.map((item) => item.categories),
        getDateNow(),
      ];

      // console.log("file.length >>> ", file.length);
      // console.log(
      //   "categories === >>> ",
      //   file.map((item) => item.categories)
      // );
      // console.log(
      //   "data === >>> ",
      //   file.map((item) => item.data)
      // );
      // console.log(file);
      if (file.length === 10) {
        console.log("remove first");
        dataInput.splice(0, 5);
        categoriesInput.splice(0, 5);
      }
      setFile([...file, { data: getRandomInt(30), categories: getDateNow() }]);
      // setCategories(categoriesInput);
      // setData(dataInput);
      // setSeries([...series, { name: "suhu", data }]);
      // setOptions({
      //   ...options,
      //   xaxis: { categories.push() },
      // });
      // console.log(options.xaxis.categories);
    }, 5000);
  });

  // setInterval(() => {
  //   let dataInput = [...file.map((item) => item.data), getRandomInt(30)];
  //   let categoriesInput = [
  //     ...file.map((item) => item.categories),
  //     getDateNow(),
  //   ];

  //   // console.log("file.length >>> ", file.length);
  //   // console.log(
  //   //   "categories === >>> ",
  //   //   file.map((item) => item.categories)
  //   // );
  //   // console.log(
  //   //   "data === >>> ",
  //   //   file.map((item) => item.data)
  //   // );
  //   // console.log(file);
  //   if (file.length === 15) {
  //     console.log("remove first");
  //     dataInput.shift();
  //     categoriesInput.shift();
  //   }
  //   setFile([...file, { data: getRandomInt(30), categories: getDateNow() }]);
  //   // setCategories(categoriesInput);
  //   // setData(dataInput);
  //   // setSeries([...series, { name: "suhu", data }]);
  //   // setOptions({
  //   //   ...options,
  //   //   xaxis: { categories.push() },
  //   // });
  //   // console.log(options.xaxis.categories);
  // }, 1000);
  return (
    <div className="App">
      <Chart options={options} series={series} width={1000} type={"line"} />
    </div>
  );
}

export default App;
