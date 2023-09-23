"use client "
import React, { useEffect } from 'react';
import showStore from './showStore';
import { useParams } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Show() {
  const store = showStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, [store, params.id]);

  return (
    <div>
      <header>
        {store.data ? ( 
          <>
            {store.data.image && store.data.image.large && ( 
              <img src={store.data.image.large} alt={store.data.name} />
            )}
            <h2>
              {store.data.name} ({store.data.symbol})
            </h2>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
      {store.graphData && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={store.graphData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      </div>
      
  );
}
