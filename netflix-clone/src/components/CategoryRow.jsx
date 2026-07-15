function CategoryRow({ selectedGenre, setSelectedGenre }) {
const genres = ["All", "Action", "Comedy", "Drama"];
  return (
    <div className="categories">
      {genres.map((genre) => (
        <button
          key={genre}
          className={selectedGenre === genre ? "active" : ""}
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default CategoryRow;