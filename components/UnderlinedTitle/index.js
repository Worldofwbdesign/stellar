import React from 'react';
import { View, Text } from 'react-native';

import './index.styl';

export default function UnderlinedTitle({ title, noMargin }) {
  return pug`
    View.root(
      styleName=[{ '-noMargin': noMargin }]
    )
      Text.title= title
      Text.stroke
  `;
}
