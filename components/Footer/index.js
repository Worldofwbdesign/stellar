import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../';
import ContactItem from './ContactItem';
import SocialItem from './SocialItem';
import {
  faCodeBranch,
  faFolderOpen,
  faChartBar,
  faLaptop,
  faGem
} from '@fortawesome/free-solid-svg-icons';

import './index.styl';

const contacts = [
  {
    key: 'Address',
    text: '1234 Somewhere Road • Nashville, TN 00000 • USA'
  },
  {
    key: 'Phone',
    text: '(000) 000-0000 x 0000'
  },
  {
    key: 'Email',
    text: 'information@untitled.tld'
  }
];

const socialIcons = [faCodeBranch, faFolderOpen, faChartBar, faLaptop, faGem];

export default function Footer() {
  return pug`
    View.root

      View.sections
        View.section
          Text.title Aliquam sed mauris
          Text.description Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
          View.buttonWrapp
            Button(
              text="Learn More"
              variant="transparent"
            )
        
        View.section
          View.contacts
            Text.title Etiam feugiat
            View.contactsList
              each contact, index in contacts
                ContactItem(
                  key=contact.key
                  contactKey=contact.key
                  text=contact.text
                  first=index === 0
                )
          
          View.social
            each icon, index in socialIcons
              SocialItem(
                key=index
                variant=index === 0 && 'first'
                icon=icon
              )

      Text.copyright © Untitled. Design: HTML5 UP. Demo Images: Unsplash
  `;
}
