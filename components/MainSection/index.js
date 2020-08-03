import React from 'react';
import { BASE_URL } from '@env';
import { Text, Image } from 'react-native';
import {
  Section,
  ImageWrapper,
  SectionDescription,
  UnderlinedTitle,
  Button
} from '../';

import './index.styl';

export default function MainCards() {
  const imgUrl = BASE_URL + '/img/phone.jpg';

  return pug`
    Section
      ImageWrapper
        Image.image(source={uri: imgUrl})
      UnderlinedTitle(title="Ipsum sed adipiscing")
      SectionDescription(text="Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.")
      Button(text="Learn More")
  `;
}
