import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Example from '../../components/Example';
import Nav from '../../components/NavBar';
import Dashboard from '../Dashboard';
import Chat from '../Chat/Chat';

function Routes() {
  return (
    <Nav>
      <Switch>
        <Route path="/courses" element={<Example />} />
        <Route path="/find-matches" element={<Example />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/accounts" element={<Example />} />
        <Route path="/" element={<Dashboard />} />
      </Switch>
    </Nav>
  );
}
export default Routes;
