import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import Edit from './Edit';
import New from './New';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/new" component={New}/>
    </Switch>
  );
}
 
export default Routes;