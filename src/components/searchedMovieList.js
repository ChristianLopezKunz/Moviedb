import { useFetchSearchMovieQuery } from "../store/apis/moviesApi";
import MovieCard from "./movieCard";
import { useSelector, useDispatch } from "react-redux";

export default function SearchMovieList() {
  const searchTerm = useSelector((state) => {
    return state.movie.searchTerm;
  });
  const { data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
     .filter(movie => movie.poster_path!== null && movie.vote_average!== 0)
     .map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      });
  }

  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}