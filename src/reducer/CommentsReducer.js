export default function reducer(
  state = {
    comments: [],
    isFetching: false,
    isFetched: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_COMMENTS_START':
      return { ...state, isFetching: true, error: false };
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        comments: action.data,
        error: false,
      };
    case 'FETCH_COMMENTS_ERROR':
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
