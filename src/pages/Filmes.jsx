import React from 'react';
import Header from '../componentes/Header2/Header2';

const filmeData = {
  "Ação": [
    {
      title: "Godzilla vs KONG",
      date: "20 April",
      rating: "12+",
      image: "./public/king.jpg" 
    },
    {
      title: "Godzilla vs KONG",
      date: "20 April",
      rating: "18+",
      image: "./public/king.jpg" 
    },
    {
      title: "Godzilla vs KONG",
      date: "20 April",
      rating: "18+",
      image: "./public/king.jpg" 
    },
    {
      title: "Godzilla vs KONG",
      date: "20 April",
      rating: "16+",
      image: "./public/king.jpg" 
    }
  ],
  "História": [
    {
      title: "Planeta dos Macacos",
      date: "21 April",
      rating: "12+",
      image: "./public/macaco.jpg" 
    },
    {
      title: "Planeta dos Macacos",
      date: "21 April",
      rating: "12+",
      image: "./public/macaco.jpg" 
    },
    {
      title: "Planeta dos Macacos",
      date: "22 April",
      rating: "12+",
      image: "./public/macaco.jpg" 
    },
    {
      title: "Planeta dos Macacos",
      date: "22 April",
      rating: "12+",
      image: "./public/macaco.jpg" 
    }
  ]
};

const MovieSection = () => {
  return (
    <div className="container mx-auto py-8">
      {Object.keys(filmeData).map((category) => (
        <section key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{`Filmes de ${category}`}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filmeData[category].map((movie) => (
              <div key={movie.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
                <div className="p-4 bg-terciary-gama3">
                  <h3 className="text-xl font-semibold">{movie.title}</h3>
                  <p className="text-gray-600">{movie.date}</p>
                  <p className="text-gray-600">{movie.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MovieSection;
