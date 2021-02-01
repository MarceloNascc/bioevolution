import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';

import Footer from "./components/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}