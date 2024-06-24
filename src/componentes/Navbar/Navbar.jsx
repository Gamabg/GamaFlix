import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav>
            <ul className="flex gap-3">
                <a href="/" className="hover:underline">Home</a>
                <a href="Filmes" className="hover:underline">Filmes</a>
                <a href="Sobre" className="hover:underline">Sobre</a>
                <a href="Contato" className="hover:underline">Contato</a>
            </ul>
        </nav>
    );
}

export default Navbar