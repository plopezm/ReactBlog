/**
 * Created by pablolm on 1/11/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
    </Route>
);