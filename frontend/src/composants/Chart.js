import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import React from "react";

function Chart(items1, date1, items2, date2, items3, date3) {
  const datas = [{ name:  `${date1}` , height: `${items1}` }, { name:  `${date2}` , height: `${items2}` }, { name:  `${date3}` , height:  `${items3}` }];
  const renderLineChart = (
    <LineChart width={600} height={300} data={datas} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="height" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  )

  return renderLineChart;

}

export default Chart;