import "./App.css";

function App() {
const movies = [
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    genre: "Thriller",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    title: "The Matrix",
    year: "1999",
    genre: "Action",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "Avatar",
    year: "2009",
    genre: "Fantasy",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
  },
  {
    title: "Joker",
    year: "2019",
    genre: "Drama",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    title: "Avengers Endgame",
    year: "2019",
    genre: "Action",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    title: "Dune",
    year: "2021",
    genre: "Sci-Fi",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
  },
  {
    title: "The Batman",
    year: "2022",
    genre: "Crime",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  }
];

  return (
    <div className="app">
      <nav>
        <h1>Movie Pisso</h1>
        <div>
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">About</a>
        </div>
      </nav>

      <section className="hero">
        <h2>Unlimited Movie Experience</h2>
        <p>Discover your favorite movies in one place</p>
        <button>Explore Movies</button>
      </section>

      <section className="movies">
        {movies.map((movie, i) => (
          <div className="card" key={i}>
            <img src={movie.image} alt={movie.title}/>

            <div className="content">
              <h3>{movie.title}</h3>
              <p>{movie.year} • {movie.genre}</p>

              <button>
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer>
        © 2026 Movie Pisso | React AKS Demo
      </footer>
    </div>
  );
}

export default App;