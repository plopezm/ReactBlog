/**
 * Created by pablolm on 1/11/16.
 */
import _ from 'lodash';
import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions/index';

const INITIAL_STATE = { all:[], post: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case GET_POST:
            return { ...state, post: action.payload.data };
        case DELETE_POST:
            return {...state, all: _.filter(state.all, function(item){
                return item.id != action.payload.data.id;
            })};
        default:
            return state;
    }
}