import React from 'react';
import { BASE_URL } from '@env';
import { View, Text, Image } from 'react-native';
import {
  Section,
  ImageWrapper,
  SectionDescription,
  UnderlinedTitle,
  Button
} from '../';
import { faCode, faCopy, faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import './index.styl';

export default function StatsSection() {
  return pug`
    Section
      UnderlinedTitle(
        title="Magna veroeros"
      )

      View.iconWrapp
        ImageWrapper
          FontAwesomeIcon(
            icon=faCode
            size=70
            color="#efa8b0"
          )
      Text.title Ipsum consequat
      View.sectionDescrWrapp
        SectionDescription(text="Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")

      View.iconWrapp
        ImageWrapper
          FontAwesomeIcon(
            icon=faCopy
            size=70
            color="#a89cc8"
          )
      Text.title Amed sed feugiat
      View.sectionDescrWrapp
        SectionDescription(text="Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")

      View.iconWrapp
        ImageWrapper
          FontAwesomeIcon(
            icon=faGem
            size=70
            color="#8cc9f0"
          )
      Text.title Dolor nullam
      View.sectionDescrWrapp
        SectionDescription(text="Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")

      View.buttonWrapp
        Button(text="Learn More")
  `;
}
