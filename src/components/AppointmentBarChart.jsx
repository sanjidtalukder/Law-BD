import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from 'recharts';

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00C49F', '#FFBB28', '#FF8042'];


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, uv } = payload[0].payload;
    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200 text-sm">
        <p className="font-semibold text-[#333]">{name}</p>
        <p className="text-[#555]">Consultation Fee: {uv} BDT</p>
      </div>
    );
  }
  return null;
};

const AppointmentBarChart = ({ chartData }) => {
  const data = chartData.map(({ name, value }) => ({
    name,
    uv: value,
  }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="uv" shape={<TriangleBar />} label={{ position: 'top' }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppointmentBarChart;
