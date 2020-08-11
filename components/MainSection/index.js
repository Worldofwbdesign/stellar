import React from 'react';
import { BASE_URL } from '@env';
import { Image, View } from 'react-native';
import {
  Section,
  ImageWrapper,
  SectionDescription,
  UnderlinedTitle,
  Button
} from '../';

import './index.styl';

export default function MainSection() {
  const imgUrl = BASE_URL + '/img/phone.jpg';

  return pug`
    Section
      ImageWrapper
        Image.image(source={uri: imgUrl})
      View.titleWrapp
        UnderlinedTitle(title="Ipsum sed adipiscing")
      View.sectionDescrWrapp
        SectionDescription(text="Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.")

      View.buttonWrapp
        Button(text="Learn More")
  `;
}
