// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, heroes: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_ALL":
      return {
        ...state,
        heroes: action.payload.data,
        currentPage: action.payload.cureentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "FETCH_HERO":
      return { ...state, hero: action.payload };
    case "CREATE":
      return { ...state, heroes: [...state.heroes, action.payload] };
    case "UPDATE":
      return {
        ...state,
        heroes: state.heroes.map((hero) =>
          hero._id === action.payload._id ? action.payload : hero
        ),
      };
    case "DELETE":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero._id !== action.payload),
      };
    default:
      return state;
  }
};
