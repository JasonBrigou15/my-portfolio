import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  return (
    <nav className="bg-black bg-opacity-85 px-8 py-6 border-b-2 border-orange-400" style={{ fontFamily: 'Poppins' }}>
      <div className="flex justify-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-lg text-white hover:text-orange-400 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;