import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { city } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Details for {decodeURIComponent(city)}</h1>
      <p className="text-lg text-gray-300">This page will contain more detailed insights about {decodeURIComponent(city)}.</p>
    </div>
  );
};

export default DetailsPage;
