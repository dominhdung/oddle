import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UserListContainer from './containers/UserListContainer';
import UserSearchContainer from './containers/UserSearchContainer';
import Layout from './components/Layout/Layout';
import UserDetailContainer from './containers/UserDetailContainer';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={UserListContainer} />
        <Route path="users">
            <IndexRoute component={UserListContainer} />
            <Route path="search" component={UserSearchContainer} />
            <Route path=":id" component={UserDetailContainer} />
        </Route>
    </Route>
);

export default routes;

