import React from 'react';
import { observer } from 'startupjs';
import { BASE_URL } from '@env';
import { Card, H4, Avatar } from '@startupjs/ui';

import './index.styl';

export default observer(function MainCards({ style }) {
  const imgUrl = BASE_URL + '/img/phone.jpg';

  return pug`
    Card.root(style=style)
      Avatar(src=imgUrl)
      H4.h4 Ipsum sed adipiscing
  `;
});
