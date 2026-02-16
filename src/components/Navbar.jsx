import { Link } from "react-router-dom";

function NavBar() {
 return (
    <nav className="bg-black bg-opacity-85 px-8 py-6 border-b-2 border-orange-400 p-4">
      <div className="flex justify-center gap-10" >
            <Link to="/" className="text-lg text-white hover:text-orange-400 transition" style={{ fontFamily: 'Poppins' }}>Home</Link>
            <Link to="/about" className="text-lg text-white hover:text-orange-400 transition" style={{ fontFamily: 'Poppins' }}>About</Link>
            <Link to="/projects" className="text-lg text-white hover:text-orange-400 transition" style={{ fontFamily: 'Poppins' }}>Projects</Link>
            <Link to="/contact" className="text-lg text-white hover:text-orange-400 transition" style={{ fontFamily: 'Poppins' }}>Contact</Link>
      </div>
    </nav>
    )
}

export default NavBar