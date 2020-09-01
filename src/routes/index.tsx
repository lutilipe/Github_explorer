import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashbord from '../pages/Dashbord';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashbord} exact />
        <Route path="/repositories/:repository+" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
