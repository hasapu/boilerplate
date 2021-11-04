import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Navigations from '../../src/navigations';
import TabNavigator from './TabNavigator';
/** => for intro view */
import IntroSplashView from '@core/screens/intro/views/intro-splash.view';

const { Navigator, Screen } = createNativeStackNavigator();
enableScreens();

const StackNavigator: React.FC = () => {
  /** => this for intro */
  const IntroNav = () => {
    return (
      <Screen
        name="Intro"
        component={IntroSplashView}
        options={{ headerShown: false }}
      />
    );
  };
  /** => this for home (tab navigation) */
  const tabNav = () => {
    return (
      <Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    );
  };
  /** => this all module page */
  const projectNav = () => {
    return Object.entries({
      ...Navigations,
    }).map(([name, props]) => (
      <Screen
        key={name}
        name={name}
        component={props.component}
        options={{ headerShown: false, stackAnimation: 'slide_from_right' }}
      />
    ));
  };

  return (
    <Navigator initialRouteName={'Intro'}>
      {IntroNav()}
      {tabNav()}
      {projectNav()}
    </Navigator>
  );
};

export default StackNavigator;
