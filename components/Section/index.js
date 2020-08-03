import React from 'react';
import { View } from 'react-native';

import './index.styl';

export default function Section({ children }) {
  return pug`
    View.root= children
  `;
}
