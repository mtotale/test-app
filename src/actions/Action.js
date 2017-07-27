import axios from 'axios';

export function getTopPosts() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_HOME_START' });

    axios
      .get('http://hn.algolia.com/api/v1/search?tags=front_page')
      .then((response) => {
        dispatch({ type: 'FETCH_HOME_SUCCESS', data: response.data.hits });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_HOME_ERROR', data: err });
      });
  };
}

export function getNewPosts() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_NEW_START' });

    axios
      .get('http://hn.algolia.com/api/v1/search_by_date?tags=story')
      .then((response) => {
        dispatch({ type: 'FETCH_NEW_SUCCESS', data: response.data.hits });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_NEW_ERROR', data: err });
      });
  };
}

export function getComments() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_COMMENTS_START' });

    axios
      .get('http://hn.algolia.com/api/v1/search_by_date?tags=comment')
      .then((response) => {
        dispatch({ type: 'FETCH_COMMENTS_SUCCESS', data: response.data.hits });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_COMMENTS_ERROR', data: err });
      });
  };
}
