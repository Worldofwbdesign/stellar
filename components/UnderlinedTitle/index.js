import React from 'react';
import { observer } from 'startupjs';
import { View, Text } from 'react-native';

import './index.styl';

export default observer(function UnderlinedTitle({ title }) {
  return pug`
    View.root
      Text.title= title
      Text.stroke
  `;
});
