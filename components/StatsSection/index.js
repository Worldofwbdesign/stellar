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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './index.styl';

export default function StatsSection() {
  return pug`
    Section
      UnderlinedTitle(
        title="Magna veroeros"
        noMargin
      )
      FontAwesomeIcon(icon="check-square")
      ImageWrapper
        FontAwesomeIcon(icon="check-square")
      Text.title Ipsum consequat
      SectionDescription(text="Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")
      Button(text="Learn More")
  `;
}
