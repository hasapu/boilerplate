/** === IMPORT PACKAGE HERE === */
import React from 'react';
import { View } from 'react-native';
import { SnbButton, SnbContainer, SnbTopNav } from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL FUNCTION === */
import { goToExample } from '../functions';
/** === STYLES === */
import { HomeStyles } from '../styles';
/** === COMPONENT === */
const HomeView: React.FC = () => {
  /** => header */
  const header = () => {
    return <SnbTopNav.Type1 type="red" title="Boilerplate" />;
  };
  /** => api standar */
  const apiStandard = () => {
    return (
      <View style={HomeStyles.heightButtom}>
        <SnbButton.Single
          title={'Standard API V2'}
          onPress={() => goToExample()}
          type={'primary'}
        />
      </View>
    );
  };
  /** => content */
  const content = () => {
    return <View>{apiStandard()}</View>;
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {content()}
    </SnbContainer>
  );
};

export default HomeView;

/**
 * ================================================================
 * NOTES
 * ================================================================
 * createdBy: hasapu (team)
 * createDate: 01022021
 * updatedBy: -
 * updatedDate: -
 * updatedFunction/Component:
 * -> NaN (no desc)
 * -> NaN (no desc)
 */
