import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex bg-primary-thompson text-white p-4 mb-4 text-xl justify-between">
            <span>Olá, visitantes!!</span>
            <h1> Seja Bem Vindo ao GamaFlix!!</h1>
            <Navbar/>
        </header>
    )
}

export default Header