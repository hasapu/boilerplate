/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View } from 'react-native';
import {
  SnbContainer,
  SnbTopNav,
  SnbProgress,
  SnbText,
} from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import { contexts } from '@contexts';
import { goBack, useExampleDetailAction } from '../functions';
import { NavigationAction } from '@navigation';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleDetailView: React.FC = () => {
  /** === HOOK === */
  const exampleDetailAction = useExampleDetailAction();
  const { params } = NavigationAction.useGetNavParams();
  const { stateExample, dispatchExample } = React.useContext(
    contexts.ExampleContext,
  );
  /** === EFFECT === */
  /** => get detail */
  React.useEffect(() => {
    exampleDetailAction.detail(dispatchExample, params.id);
    return () => {
      exampleDetailAction.reset(dispatchExample);
    };
  }, []);
  /** === VIEW === */
  /** => header */
  const header = () => {
    return <SnbTopNav.Type3 type="red" title={'Detail'} backAction={goBack} />;
  };
  /** => content */
  const content = () => {
    const detail = stateExample.detail.data;
    return (
      <View style={ExampleStyles.detailContainer}>
        <SnbText.H4>{detail?.id}</SnbText.H4>
        <SnbText.B1>{detail?.status}</SnbText.B1>
      </View>
    );
  };
  /** => loading */
  const loading = () => {
    return (
      <View style={ExampleStyles.loadingContainer}>
        <SnbProgress size={50} />
      </View>
    );
  };
  /** => process */
  const process = () => {
    return stateExample.detail.loading ? loading() : content();
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {process()}
    </SnbContainer>
  );
};

export default ExampleDetailView;
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
