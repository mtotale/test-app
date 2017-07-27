import { combineReducers } from 'redux';

import home from './HomeReducer';
import newPosts from './NewReducer';
import comments from './CommentsReducer';

export default combineReducers({
  home,
  newPosts,
  comments,
});
