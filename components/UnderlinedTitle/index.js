import React from 'react';
import { View, Text } from 'react-native';

import './index.styl';

export default function UnderlinedTitle({ title, desktopAlignLeft }) {
  return pug`
    View.root(
      styleName=[{ desktopAlignLeft }]
    )
      Text.title= title
      Text.stroke
  `;
}
