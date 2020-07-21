import React, { useState, useEffect } from 'react';
import { observer, useDoc, useApi } from 'startupjs';
import { BASE_URL } from '@env';
import { H1, Div, Span } from '@startupjs/ui';
import { Image } from 'react-native';

import './index.styl';

export default observer(function Header({ style }) {
  const logoUrl = '/img/logo.png';
  const base = BASE_URL;

  return pug`
    Div.root(style=style)
      Image.image(
        source={uri: base + logoUrl}
      )
      H1.h1 Stellar
      Span.descr Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `;
});
