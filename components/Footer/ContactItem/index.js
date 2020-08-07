import React from 'react';
import { View, Text } from 'react-native';

import './index.styl';

export default function ContactItem({ contactKey, text }) {
  return pug`
    View.root
      Text.key= contactKey
      Text.text= text
  `;
}
