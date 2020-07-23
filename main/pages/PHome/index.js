import React from 'react';
import { observer } from 'startupjs';
import { ScrollView, View } from 'react-native';
import { Header, MainSection } from 'components';
import './index.styl';

export default observer(function PHome() {
  return pug`
    ScrollView.root
      Header
      View.content
        MainSection
  `;
});
