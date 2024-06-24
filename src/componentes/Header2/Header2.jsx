import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex bg-primary-gama1 text-white p-6 text-xl justify-between">
           <span className="text-4xl">Fil<span className="text-secondary-gama2 text-4xl">mes</span></span>
            <Navbar/>
        </header>
    )
}

export default Header