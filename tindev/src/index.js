import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Route from './routes';

export default function App() {
  return (
    <Route></Route>
  );
}