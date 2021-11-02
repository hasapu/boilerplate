import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { View, Platform } from 'react-native';
import { HomeView } from '@screen/home/views';
import { color as colors, SnbText, SnbIconHint } from 'react-native-sinbad-ui';

const { Navigator, Screen } = createBottomTabNavigator();
enableScreens();

const TabNavigator = () => {
  return (
    <Navigator
      detachInactiveScreens
      tabBarOptions={{
        allowFontScaling: true,
        activeTintColor: colors.red50,
        inactiveTintColor: colors.black40,
        style: { height: Platform.OS === 'ios' ? '10%' : 54 },
      }}>
      <Screen
        name="HomeView"
        component={HomeView}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ paddingBottom: 8 }}>
              <SnbText.C1 color={color}>Beranda</SnbText.C1>
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <View style={{ paddingTop: 8 }}>
              <View style={{ height: 24 }}>
                <SnbIconHint
                  badgeColor="red"
                  iconName="beranda"
                  size={24}
                  iconColor={color}
                  dotShow={true}
                />
              </View>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
