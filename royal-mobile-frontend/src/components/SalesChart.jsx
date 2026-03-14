import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function SalesChart({ data }) {

  return (

    <div style={{ marginTop: "30px" }}>

      <LineChart
        width={700}
        height={300}
        data={data}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
        />

      </LineChart>

    </div>

  );
}