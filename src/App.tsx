import React from "react";
import { CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";
import { Line, LineChart } from "recharts";

function App() {
  const [data, setData] = React.useState([
    { name: "Page A", uv: 400, pv: 400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 300, amt: 2100 },
    { name: "Page C", uv: 700, pv: 700, amt: 2550 },
    { name: "Page D", uv: 400, pv: 400, amt: 2400 },
    { name: "Page E", uv: 300, pv: 300, amt: 2100 },
    { name: "Page F", uv: 700, pv: 700, amt: 2550 },
  ]);

  React.useEffect(() => {}, []);

  const aniEnd = React.useCallback(() => {
    setData((state) => {
      return state.concat({
        name: "Page A",
        uv: 400,
        pv: 400,
        amt: 2400,
      });
    });
  }, []);

  const onClick = React.useCallback(() => {
    const newData = data.concat({
      name: "Page A",
      uv: 400,
      pv: 400,
      amt: 2400,
    });

    setData(newData);
  }, [data]);
  return (
    <>
      <LineChart width={600} height={200} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#E92B41"
          dot={false}
          onAnimationEnd={aniEnd}
          animationDuration={1500}
        />
        {/* <ReferenceLine x="Page D" stroke="#E92B41" label="종합계약 유리시점" /> */}
        {/* <Line
          type="monotone"
          dataKey="pv"
          stroke="#2768F2"
          dot={false}
          isAnimationActive={false}
        /> */}

        {/* <CartesianGrid stroke="#eee" />
      <XAxis dataKey="name" />
      <YAxis />

      <Tooltip /> */}
      </LineChart>
      <LineChart width={600} height={200} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#2768F2"
          dot={false}
          onAnimationEnd={aniEnd}
          animationDuration={1500}
        />
        {/* <ReferenceLine x="Page D" stroke="#E92B41" label="종합계약 유리시점" /> */}
        {/* <Line
          type="monotone"
          dataKey="pv"
          stroke="#2768F2"
          dot={false}
          isAnimationActive={false}
        /> */}

        {/* <CartesianGrid stroke="#eee" />
      <XAxis dataKey="name" />
      <YAxis />

      <Tooltip /> */}
      </LineChart>
      <LineChart width={600} height={200} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#1EBF6C"
          dot={false}
          onAnimationEnd={aniEnd}
          animationDuration={1500}
        />
        {/* <ReferenceLine x="Page D" stroke="#E92B41" label="종합계약 유리시점" /> */}
        {/* <Line
          type="monotone"
          dataKey="pv"
          stroke="#2768F2"
          dot={false}
          isAnimationActive={false}
        /> */}

        {/* <CartesianGrid stroke="#eee" />
      <XAxis dataKey="name" />
      <YAxis />

      <Tooltip /> */}
      </LineChart>
    </>
  );
}

export default App;
