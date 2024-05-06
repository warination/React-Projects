import { useState } from "react";
import Search from "./assets/components/Search";
import Nav from "./assets/components/Nav";
import NumResult from "./assets/components/NumResult";
import { useMovies } from "./useMovies";
import Loader from "./assets/components/Loader";
import Main from "./assets/components/Main";
import Box from "./assets/components/Box";
import MovieList from "./assets/components/MovieList";
import ErrorMessage from "./assets/components/ErrorMessage";
import MovieDetails from "./assets/components/MovieDetails";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  return (
    <>
      <Nav>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Nav>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
          />
        </Box>
      </Main>
    </>
  );
}

export default App;
