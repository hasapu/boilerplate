/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View } from 'react-native';
import {
  SnbContainer,
  SnbTopNav,
  SnbButton,
  SnbDialog,
} from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import { useAuthAction } from '@core/functions/auth/auth-hook.function';
import { useDataAuth } from '@core/redux/Data';
import { goBack, goToCreate, goToList } from '../functions';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleView: React.FC = () => {
  /** === HOOK === */
  const authAction = useAuthAction();
  const authData = useDataAuth();
  /** === STATE === */
  const [openModalLoginSuccess, setOpenModalLoginSuccess] =
    React.useState(false);
  /** === EFFECT === */
  /** => check login */
  React.useEffect(() => {
    if (authData.loginUsername.data !== null) {
      setOpenModalLoginSuccess(true);
    }
    return () => {
      authAction.resetLoginUsername();
    };
  }, [authData.loginUsername.data]);
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
  const login = () => {
    return (
      <SnbButton.Single
        loading={authData.loginUsername.loading}
        title={'Login'}
        onPress={() =>
          authAction.loginUserName({ username: '34389791', password: 'sinbad' })
        }
        type={'primary'}
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
        {login()}
        {list()}
        {create()}
      </View>
    );
  };
  /** => modal confirmation delete */
  const modalLoginSuccess = () => {
    return (
      <SnbDialog
        open={openModalLoginSuccess}
        title="Success"
        content="Login Success"
        ok={() => setOpenModalLoginSuccess(false)}
        cancel={() => setOpenModalLoginSuccess(false)}
      />
    );
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {content()}
      {modalLoginSuccess()}
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
