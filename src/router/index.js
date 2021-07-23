import React from 'react';
import { Route, Switch } from 'react-router-dom';

import User from '@modules/user';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={User} />
    </Switch>
  );
};

export default Router;
