import React from 'react';
import { View } from 'react-native';

import './index.styl';

export default function ImageWrapper({ children, variant }) {
  return pug`
    View.root(
      styleName=[variant]
    )
      View.content= children
  `;
}
