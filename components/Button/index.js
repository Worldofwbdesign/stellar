import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import './index.styl';

export default function StyledButton({ text, variant, textColor = '#636363' }) {
  return pug`
    TouchableOpacity.root(
      style={ color: textColor + '!important' }
      styleName=[variant]
    )
      Text.buttonText(
        styleName=[variant]
      )= text
  `;
}
