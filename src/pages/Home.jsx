import data from '../../artigos.json'

const filme = [
    {
      title: "Godzilla vs KONG",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/king.jpg" 
    },
    {
      title: "Godzilla vs KONG",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/king.jpg" 
    },
    {
      title: "Godzilla vs KONG",
      description: "O astronauta americano George Taylor vai parar por acidente em um planeta habitado por macacos. Os animais dominam o lugar, escravizando os seres humanos, inclusive George e os tripulantes da nave. Agora, o astronauta terá que lutar pela sua liberdade e os outros.",
      image: "./public/king.jpg" 
    }
  ];

function Filmes() {
    console.log(data)
    return (
        <>
        <img src="/public/macaao.jpg" className="w-full" alt="" />
        <div className="container mx-auto py-8">
      {filme.map((filme, index) => (
        <div key={index} className="flex bg-gama1 rounded-lg shadow-md overflow-hidden mb-8">
          <img src={filme.image} alt={filme.title} className="w-1/3 h-auto object-cover" />
          <div className="p-4 w-2/3 bg-terciary-gama3">
            <h3 className="text-2xl font-bold mb-2">{filme.title}</h3>
            <p className="text-gray-700 mb-4">{filme.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver mais</button>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}

export default Filmes