import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import './index.styl';

export default function StyledButton({ text, variant }) {
  return pug`
    TouchableOpacity.root(
      styleName=[variant]
    )
      Text.buttonText(
        styleName=[variant]
      )= text
  `;
}
