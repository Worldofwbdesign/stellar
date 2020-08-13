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
    Section(desktopRow)
      View.imageWrapp
        ImageWrapper
          Image.image(source={uri: imgUrl})

      View.content
        View.titleWrapp
          UnderlinedTitle(
            title="Ipsum sed adipiscing"
            desktopAlignLeft
          )
        View.sectionDescrWrapp
          SectionDescription(
            text="Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam."
            desktopAlignLeft
          )

        View.buttonWrapp
          Button(text="Learn More")
  `;
}
