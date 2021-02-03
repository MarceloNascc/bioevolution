import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import NaturalSelection from './pages/NaturalSelection';
import Speciation from './pages/Speciation';
import ArtificialSelection from './pages/ArtificialSelection';
import Lamarckismo from './pages/Lamarckismo';
import Darwinismo from './pages/Darwinismo';
import GeneticDrift from './pages/GeneticDrift';

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/natural-selection' component={NaturalSelection} />
        <Route path='/speciation' component={Speciation} />
        <Route path='/artificial-selection' component={ArtificialSelection} />
        <Route path='/lamarckismo' component={Lamarckismo} />
        <Route path='/darwinismo' component={Darwinismo} />
        <Route path='/genetic-drift' component={GeneticDrift} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}