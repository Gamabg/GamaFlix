import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = "7c572a9f5b3ba776080330d23bb76e1e";

const filmeData = {
  Ação: [
    {
      title: "Godzilla vs KONG",
      date: "20 April",
      rating: "12+",
      image: "./public/king.jpg",
    },
  ],
  História: [
    {
      title: "Planeta dos Macacos",
      date: "21 April",
      rating: "12+",
      image: "./public/macaco.jpg",
    },
  ],
};

function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-white">
        <h1 className="text-3xl p-20 pt-10 pb-10 font-bold text-gama1">
          Filmes
        </h1>
        <div className="listaFilmes flex justify-between gap-16 flex-wrap p-20 pt-0">
          {filmes.map((filme) => (
            <div
              key={filme.id}
              className="card-filme text-white rounded-2xl h-[300px] w-[150px] flex flex-col justify-around"
            >
              <img
                className="w-40 rounded-2xl"
                src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`}
                alt={filme.title}
              />
              <h1 className="text-wrap text-center pb-1 text-gama1">
                {filme.title}
              </h1>
              <Link
                to={`${filme.id}`}
                className="flex justify-center bg-gama2 text-white rounded p-5 pt-1 pb-1"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filmes;

/*
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
*/
