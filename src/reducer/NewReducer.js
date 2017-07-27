export default function reducer(
  state = {
    newPosts: [],
    isFetching: false,
    isFetched: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_NEW_START':
      return { ...state, isFetching: true, error: false };
    case 'FETCH_NEW_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        newPosts: action.data,
        error: false,
      };
    case 'FETCH_NEW_ERROR':
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
