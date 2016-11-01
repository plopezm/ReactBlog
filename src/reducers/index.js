import { combineReducers } from 'redux';
import ReducerPosts from './ReducerPosts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: formReducer
});

export default rootReducer;
