import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserScreen from '@modules/user/screens';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={UserScreen} />
    </Switch>
  );
};

export default Router;
