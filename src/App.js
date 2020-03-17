import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Pages here
import Home from './pages/Home';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';

// Import Components here
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
