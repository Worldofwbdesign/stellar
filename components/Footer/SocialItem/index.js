import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import './index.styl';

export default function SocialItem({ icon, variant }) {
  return pug`
    TouchableOpacity.root(
      styleName=[variant]
    )
      FontAwesomeIcon(
        icon=icon
        size=20
        color="#ffffff"
      )
  `;
}
