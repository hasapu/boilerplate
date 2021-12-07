/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View } from 'react-native';
import { SnbContainer, SnbTopNav, SnbButton } from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import { goBack, goToCreate, goToList } from '../functions';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleView: React.FC = () => {
  /** === HOOK === */
  /** === EFFECT === */
  /** === VIEW === */
  /** => header */
  const header = () => {
    return (
      <SnbTopNav.Type3
        type="red"
        title={'Standard API V2'}
        backAction={goBack}
      />
    );
  };
  /** => list */
  const list = () => {
    return (
      <SnbButton.Single
        title={'List'}
        onPress={() => goToList()}
        type={'primary'}
      />
    );
  };
  /** => create */
  const create = () => {
    return (
      <SnbButton.Single
        title={'Create'}
        onPress={() => goToCreate()}
        type={'primary'}
      />
    );
  };
  /** => content */
  const content = () => {
    return (
      <View style={ExampleStyles.container}>
        {list()}
        {create()}
      </View>
    );
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {content()}
    </SnbContainer>
  );
};

export default ExampleView;
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
