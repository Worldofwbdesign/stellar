import React from 'react';
import { View } from 'react-native';

import './index.styl';

export default function ImageWrapper({ children }) {
  return pug`
    View.root
      View.content= children
  `;
}
