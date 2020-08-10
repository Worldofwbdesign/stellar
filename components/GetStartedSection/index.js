import React from 'react';
import { View } from 'react-native';
import {
  Section,
  ImageWrapper,
  SectionDescription,
  UnderlinedTitle,
  Button
} from '../';

import './index.styl';

export default function GetStartedSection() {
  return pug`
    Section(noBorder)
      UnderlinedTitle(title="Congue imperdiet")
      View.sectionDescrWrapp
        SectionDescription(text="Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.")

      View.buttonWrapp
        Button(
          variant="blue"
          text="Get Started"
          textColor="red"
        )
        Button(text="Learn More")
  `;
}
