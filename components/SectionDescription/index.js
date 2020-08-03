import React from 'react';
import { Text } from 'react-native';

import './index.styl';

export default function SectionDescription({ text }) {
  return pug`
    Text.root= text
  `;
}
