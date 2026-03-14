"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", engagement: 200 },
  { name: "Tue", engagement: 340 },
  { name: "Wed", engagement: 280 },
  { name: "Thu", engagement: 390 },
  { name: "Fri", engagement: 460 },
  { name: "Sat", engagement: 520 },
  { name: "Sun", engagement: 490 }
];

export function AnalyticsChart() {
  return (
    <div className="glass-card h-80">
      <h3 className="mb-4 text-lg font-semibold">Weekly Engagement</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="engagement" stroke="#7c3aed" fill="#7c3aed55" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
