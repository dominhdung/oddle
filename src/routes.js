import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UserSearchContainer from './containers/UserSearchContainer';
import Layout from './components/Layout/Layout';
import UserDetailContainer from './containers/UserDetailContainer';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={UserSearchContainer} />
        <Route path="users/:id" component={UserDetailContainer} />
        
    </Route>
);

export default routes;

