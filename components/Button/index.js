import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import './index.styl';

export default function StyledButton({ text }) {
  return pug`
    TouchableOpacity.root
      Text= text
  `;
}
