import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import './index.styl';

export default function SocialItem({ icon }) {
  return pug`
    TouchableOpacity.root
      FontAwesomeIcon(
        icon=icon
        size=20
        color="#ffffff"
      )
  `;
}
