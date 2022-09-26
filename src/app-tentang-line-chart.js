import "./App.css";
import React, { useState, useEffect } from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";

function App() {
  function getDateNow() {
    let date = new Date();
    let tanggal = date.getDate();
    let bulan = date.getMonth();
    let tahun = date.getFullYear();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();
    return `${tanggal} ${bulan} ${tahun} - ${jam} : ${menit} : ${detik}`;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let dataSet = anychart.data.set([]);

  setInterval(() => {
    // if(count < )
    console.log(dataSet.oc.length);
    if (dataSet.oc.length === 10) {
      console.log("remove 1");
      dataSet.remove(0);
    } else {
      // console.log(dataRaw);
      dataSet.append([getDateNow(), getRandomInt(30)]);
    }
  }, 1000);
  return (
    <div className="App">
      {console.log(dataSet)}
      <button onClick={() => dataSet.append(10)}> show data</button>
      <AnyChart
        type="line"
        data={dataSet}
        title="My Chart Title"
        legend="true"
        width={1000}
      />
    </div>
  );
}

export default App;
