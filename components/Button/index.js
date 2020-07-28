import React from 'react';
import { observer } from 'startupjs';
import { TouchableOpacity, Text } from 'react-native';

import './index.styl';

export default observer(function StyledButton({ text }) {
  return pug`
    TouchableOpacity.root(
      Text= text
    )
  `;
});
