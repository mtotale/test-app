export default function reducer(
  state = {
    home: [],
    isFetching: false,
    isFetched: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_HOME_START':
      return { ...state, isFetching: true, error: false };
    case 'FETCH_HOME_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        home: action.data,
        error: false,
      };
    case 'FETCH_HOME_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        error: action.data,
      };
    default:
      return state;
  }
}
