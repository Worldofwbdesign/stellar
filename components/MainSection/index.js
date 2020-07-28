import React from 'react';
import { observer } from 'startupjs';
import { BASE_URL } from '@env';
import { View, Text, Image } from 'react-native';
import { ImageWrapper, UnderlinedTitle, Button } from '../';

import './index.styl';

export default observer(function MainCards({ style }) {
  const imgUrl = BASE_URL + '/img/phone.jpg';

  return pug`
    View.root(style=style)
      ImageWrapper
        Image.image(source={uri: imgUrl})
      UnderlinedTitle(title="Ipsum sed adipiscing")
      Text.descr Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
      Button(text="Learn More")
  `;
});
