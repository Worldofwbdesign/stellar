import React from 'react';
import { Text } from 'react-native';

import './index.styl';

export default function SectionDescription({ text, variant }) {
  return pug`
    Text.root(
      styleName=[variant]
    )= text
  `;
}
