import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const sampleData = [
  { value: 10 },
  { value: 40 },
  { value: 20 },
  { value: 60 },
  { value: 30 },
  { value: 80 },
];

const CityWidget = ({ city, forecast, percentage, trend }) => {
  return (
    <div className="bg-white/10 text-white border border-transparent rounded-xl shadow-md w-72 p-4 backdrop-blur-md relative">
      <div className="absolute inset-0 rounded-xl border border-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 pointer-events-none"></div>
      <h3 className="text-lg font-semibold mb-2 relative z-10">{city}</h3>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-gray-300">Forecast</p>
          <div className="text-xl font-bold flex items-center gap-1">
            {forecast} {trend === 'up' ? <ArrowUpRight className="text-green-400" /> : <ArrowDownRight className="text-red-400" />}
          </div>
        </div>
        <div className="h-16 w-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 relative z-10">
        <div>
          <p className="text-sm text-gray-300">Change</p>
          <div className="text-md font-bold flex items-center gap-1">
            {percentage} {trend === 'up' ? <ArrowUpRight className="text-green-400" /> : <ArrowDownRight className="text-red-400" />}
          </div>
        </div>
        <div className="h-16 w-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <Line type="monotone" dataKey="value" stroke="#f87171" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CityWidget;