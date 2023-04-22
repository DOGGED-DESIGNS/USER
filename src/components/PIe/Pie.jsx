import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Piez = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="number"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#0d4e87"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piez;
