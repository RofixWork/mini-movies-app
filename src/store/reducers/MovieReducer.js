const initState = {
  movies: [],
  toggleSidebar: false,
  search: "",
};
const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, toggleSidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, toggleSidebar: false };
    case "GET_MOVIES":
      return { ...state, movies: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "SEARCH_MOVIES":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
export default MovieReducer;
