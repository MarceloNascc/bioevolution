import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import NaturalSelection from './pages/NaturalSelection';

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/natural-selection' component={NaturalSelection} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}