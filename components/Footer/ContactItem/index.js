import React from 'react';
import { View, Text } from 'react-native';

import './index.styl';

export default function ContactItem({ contactKey, text, first }) {
  return pug`
    View.root(
      styleName=[{ first }]
    )
      Text.key= contactKey
      Text.text= text
  `;
}
