import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MovieCard from "./components/MovieCard";
import CategoryRow from "./components/CategoryRow";

import movies from "./data/movies";

import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) => {
  const matchesGenre =
    selectedGenre === "All" || movie.genre === selectedGenre;

  const matchesSearch = movie.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesGenre && matchesSearch;
});

  return (
    <>
      <Navbar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

      <div className="layout">
        <Sidebar />

        <main className="content">
          <CategoryRow
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />

          {filteredMovies.length > 0 ? (
  <div className="movie-grid">
    {filteredMovies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))}
  </div>
) : (
  <h2>No movies found.</h2>
)}


        </main>
      </div>
    </>
  );
}

export default App;