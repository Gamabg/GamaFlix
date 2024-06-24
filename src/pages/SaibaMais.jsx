
import { useState, useEffect } from "react";

function FilmeDetalhes() {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_TMDB_API_KEY"
    )
      .then((response) => response.json())
      .then((response) => setFilme(response.results[0])) // Get the first movie
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto pt-16">
      {filme && ( // Render only if filme has data
        <div>
          <div className="flex flex-col items-center mb-8">
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} // Use poster path
              alt={filme.title}
              className="w-full h-64 object-cover"
            />
            <h1 className="text-3xl font-bold text-gray-800 mt-4">
              {filme.title}
            </h1>
            <p className="text-gray-600">{filme.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Detalhes
              </h2>
              {/* Add details section here (e.g., genre, release date) */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmeDetalhes;
