import React from 'react';
import { observer } from 'startupjs';
import { BASE_URL } from '@env';
import { Image, Text, View } from 'react-native';

import './index.styl';

export default observer(function Header({ style }) {
  const logoUrl = '/img/logo.png';
  const base = BASE_URL;

  return pug`
    View.root(style=style)
      Image.image(
        source={uri: base + logoUrl}
      )
      Text.h1 Stellar
      Text.descr Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `;
});
