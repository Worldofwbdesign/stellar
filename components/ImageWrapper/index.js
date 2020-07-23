import React from 'react';
import { observer } from 'startupjs';
import { View } from 'react-native';

import './index.styl';

export default observer(function ImageWrapper({ children }) {
  return pug`
    View.root= children
  `;
});
