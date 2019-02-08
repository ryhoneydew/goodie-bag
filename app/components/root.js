import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Candies from './Candies';
import HomePage from './HomePage';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/candies" component={Candies} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
