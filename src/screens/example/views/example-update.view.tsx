/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View } from 'react-native';
import {
  SnbContainer,
  SnbTopNav,
  SnbProgress,
  SnbText,
  SnbButton,
  SnbDialog,
} from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import { contexts } from '@contexts';
import {
  goBack,
  useExampleDetailAction,
  useExampleUpdateAction,
} from '../functions';
import { NavigationAction } from '@navigation';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleUpdateView: React.FC = () => {
  /** === HOOK === */
  const exampleDetailAction = useExampleDetailAction();
  const exampleUpdateAction = useExampleUpdateAction();
  const { params } = NavigationAction.useGetNavParams();
  const { stateExample, dispatchExample } = React.useContext(
    contexts.ExampleContext,
  );
  /** === STATE === */
  const [openModalSuccess, setOpenModalSuccess] = React.useState(false);
  /** === EFFECT === */
  /** => get detail */
  React.useEffect(() => {
    exampleDetailAction.detail(dispatchExample, params.id);
    return () => {
      exampleDetailAction.reset(dispatchExample);
      exampleUpdateAction.reset(dispatchExample);
    };
  }, []);
  /** => check for success update */
  React.useEffect(() => {
    if (stateExample.update.data !== null) {
      setOpenModalSuccess(true);
    }
  }, [stateExample.update.data]);
  /** === VIEW === */
  /** => header */
  const header = () => {
    return <SnbTopNav.Type3 type="red" title={'Update'} backAction={goBack} />;
  };
  /** => content */
  const content = () => {
    const detail = stateExample.detail.data;
    return (
      <>
        <View style={ExampleStyles.detailContainer}>
          <SnbText.H4>{detail?.id}</SnbText.H4>
          <SnbText.B1>{detail?.status}</SnbText.B1>
          <SnbButton.Dynamic
            size={'large'}
            loading={stateExample.update.loading}
            title={'Update to draf'}
            onPress={() =>
              exampleUpdateAction.update(dispatchExample, params.id, {
                status: 'draf',
              })
            }
            type={'primary'}
          />
        </View>
      </>
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
  /** => modal success update */
  const modalSuccessUpdate = () => {
    return (
      <SnbDialog
        open={openModalSuccess}
        title="Success"
        content="Data Updated"
        ok={() => {
          setOpenModalSuccess(false);
          exampleDetailAction.detail(dispatchExample, params.id);
        }}
        cancel={() => setOpenModalSuccess(false)}
      />
    );
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {process()}
      {modalSuccessUpdate()}
    </SnbContainer>
  );
};

export default ExampleUpdateView;
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
