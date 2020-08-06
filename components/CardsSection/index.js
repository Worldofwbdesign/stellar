import React from 'react';
import { View, Text } from 'react-native';
import { Section, SectionDescription, UnderlinedTitle, Button } from '../';
import {
  faCodeBranch,
  faFolderOpen,
  faChartBar,
  faLaptop,
  faGem
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import StatsCard from './StatsCard';

const cards = [
  {
    icon: faCodeBranch,
    counter: '5,120',
    title: 'Etiam',
    backgroundColor: '#efa8b0'
  },
  {
    icon: faFolderOpen,
    counter: '8,192',
    title: 'Magna',
    backgroundColor: '#c79cc8'
  },
  {
    icon: faChartBar,
    counter: '2,048',
    title: 'Tempus',
    backgroundColor: '#a89cc8'
  },
  {
    icon: faLaptop,
    counter: '4,096',
    title: 'Aliquam',
    backgroundColor: '#9bb2e1'
  },
  {
    icon: faGem,
    counter: '1,024',
    title: 'Nullam',
    backgroundColor: '#8cc9f0'
  }
];

import './index.styl';

export default function CardsSection() {
  return pug`
    Section
      UnderlinedTitle(
        title="Ipsum consequat"
        noMargin
      )
      SectionDescription(text="Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.")

      View.cards
        each card, index in cards
          StatsCard(
            key=index
            icon=card.icon
            counter=card.counter
            title=card.title
            backgroundColor=card.backgroundColor
            variant=index === 0 ? '-first' : index === cards.length - 1 ? '-last' : false
          )

      Text.description Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.

      View.buttonWrapp
        Button(text="Learn More")
  `;
}
