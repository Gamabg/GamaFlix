import data from '../../artigos.json'

function Filmes() {
    console.log(data)
    return (
        <>
        <img src="/public/macaao.jpg" className="w-full" alt="" />
        <div className='grid grid-cols-3'>
        {data.map(
                (filme, index) => (
                    <div className='card p-6 flex-col' key={index}>
                    <img src={filme.image}/>
                    <h1 key={filme.title}>{filme.title}</h1>
                    
                    <div className="texto">
                        {
                            filme.text.map(texto => (
                                <p key={texto}>{texto}</p>
                            ))
                        }
                    </div>
                    </div>
                )   
            )
        }
        </div>
        </>
    );
}

export default Filmes