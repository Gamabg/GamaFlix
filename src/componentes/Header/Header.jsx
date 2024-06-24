import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex bg-gama1 text-white p-6 text-xl justify-between">
           <span className="text-4xl font-bold">Gama<span className=" font  -bold text-gama2 text-4xl">Flix</span></span>
            <Navbar/>
        </header>
    )
}

export default Header