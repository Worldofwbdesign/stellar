import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import './index.styl';

export default function StatsCard({
  icon,
  counter,
  title,
  backgroundColor,
  variant
}) {
  return pug`
    View.root(
      style={ backgroundColor: backgroundColor || "#000000" }
      styleName=[variant]
    )
      FontAwesomeIcon(
        icon=icon
        size=70
        color="#ffffff"
      )
      Text.counter= counter
      Text.title= title
  `;
}
