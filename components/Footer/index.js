import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../';

import './index.styl';

export default function Footer() {
  return pug`
    View.root
      Text.title Aliquam sed mauris
      Text.description Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
      View.buttonWrapp
        Button(
          text="Learn More"
          variant="transparent"
        )

      View.contacts
        
  `;
}
