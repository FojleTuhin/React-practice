
import { LineChart as Lchart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,BarChart, Bar } from 'recharts';





const LineChart = () => {

    const studentData = [
        { student: 1, mathMark: 85 },
        { student: 2, mathMark: 78 },
        { student: 3, mathMark: 92 },
        { student: 4, mathMark: 65 },
        { student: 5, mathMark: 80 },
        { student: 6, mathMark: 88 },
        { student: 7, mathMark: 70 },
        { student: 8, mathMark: 95 },
        { student: 9, mathMark: 72 },
        { student: 10, mathMark: 83 }
      ];

    return (
        <div>
          <Lchart width={500} height={300} data={studentData}>
            <Line dataKey="mathMark"></Line>
            <XAxis dataKey="student"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </Lchart>

          <PieChart width={400} height={400}>
            <Pie data={studentData} dataKey="mathMark" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
          </PieChart>


          <BarChart width={400} height={400} data={studentData}>
            <Bar dataKey={mathMark}></Bar>

          </BarChart>
        </div>
    );
};

export default LineChart;