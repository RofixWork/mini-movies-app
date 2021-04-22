const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=733f8a709834aab464dd78dc75e99784&language=en-US&page=1`
      );
      const movies = await res.json();
      dispatch({ type: "GET_MOVIES", payload: movies.results });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getAllMovies;
