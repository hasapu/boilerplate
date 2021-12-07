/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View } from 'react-native';
import { SnbContainer, SnbTopNav, SnbButton } from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import { goBack } from '../functions';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleDeleteView: React.FC = () => {
  /** === HOOK === */
  /** === EFFECT === */
  /** === VIEW === */
  /** => header */
  const header = () => {
    return <SnbTopNav.Type3 type="red" title={'Delete'} backAction={goBack} />;
  };
  /** => delete */
  const dlt = () => {
    return (
      <SnbButton.Single
        title={'Delete'}
        onPress={() => console.log('lallala')}
        type={'primary'}
      />
    );
  };
  /** => content */
  const content = () => {
    return <View style={ExampleStyles.container}>{dlt()}</View>;
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {content()}
    </SnbContainer>
  );
};

export default ExampleDeleteView;
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
