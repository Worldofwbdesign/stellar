import React from 'react';
import { View } from 'react-native';

import './index.styl';

export default function Section({ children, noBorder, desktopRow }) {
  return pug`
    View.root(
      styleName=[noBorder && 'noBorder', desktopRow && 'desktopRow']
    )= children
  `;
}
