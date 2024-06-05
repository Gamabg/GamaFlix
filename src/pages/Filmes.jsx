import { useState } from "react";

function Filmes() {
    const [filmes, setFilmes] = useState([])

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then(Response => Response.json())
    .then(Response => setFilmes(Response.results))
    .catch (error => console.log(error))

    return (
        <>
        <h1>Filmes</h1>
        <div className="listafilmes">
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                            <h1>{filme.title}</h1>
                            <p>{filme.overview}</p>
                        </div>
                    )
                )
            }
        </div>
        </>
    );
}

export default Filmes