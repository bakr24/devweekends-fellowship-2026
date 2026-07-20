import { FiSearch } from "react-icons/fi";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">

    <img
        src="/images/netflix-logo.png"
        className="logo"
    />

    <div className="search-box">

      <FiSearch className="search-icon" />
        <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
        />

    </div>

</nav>
  );
}

export default Navbar;