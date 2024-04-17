import { configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import searchMoviesSlice from "./slices/searchMoviesSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    movie: searchMoviesSlice,
    
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchTrailerQuery } from './apis/moviesApi';