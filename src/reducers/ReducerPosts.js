/**
 * Created by pablolm on 1/11/16.
 */
import _ from 'lodash';
import { FETCH_POSTS, GET_POST, UPDATE_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            const newPosts = _.mapKeys(action.payload.data, 'id');
            return { ...state, ...newPosts};
        case GET_POST:
        case UPDATE_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            console.log("Deleting");
            console.log(action.payload.data);
            console.log(_.omit(state, action.payload.data));
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}