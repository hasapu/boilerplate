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
import { contexts } from '@contexts';
import {
  goBack,
  useExampleCreateAction,
  useExampleListAction,
  goToList,
} from '../functions';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleCreateView: React.FC = () => {
  /** === HOOK === */
  const exampleCreateAction = useExampleCreateAction();
  const exampleListAction = useExampleListAction();
  const { stateExample, dispatchExample } = React.useContext(
    contexts.ExampleContext,
  );
  /** === STATE === */
  const [openModalSuccess, setOpenModalSuccess] = React.useState(false);
  /** === EFFECT === */
  React.useEffect(() => {
    return () => {
      exampleCreateAction.reset(dispatchExample);
    };
  }, []);
  /** => check for success create */
  React.useEffect(() => {
    if (stateExample.create.data !== null) {
      setOpenModalSuccess(true);
    }
  }, [stateExample.create.data]);
  /** === VIEW === */
  /** => header */
  const header = () => {
    return <SnbTopNav.Type3 type="red" title={'Create'} backAction={goBack} />;
  };
  /** => create */
  const create = () => {
    return (
      <SnbButton.Single
        loading={stateExample.create.loading}
        title={'Create'}
        onPress={() =>
          exampleCreateAction.create(dispatchExample, {
            items: [{ name: 'minyak', price: 2000, qty: 3 }],
          })
        }
        type={'primary'}
      />
    );
  };
  /** => content */
  const content = () => {
    return <View style={ExampleStyles.container}>{create()}</View>;
  };
  /** => modal success create */
  const modalSuccessCreate = () => {
    return (
      <SnbDialog
        open={openModalSuccess}
        title="Success"
        content="Data Created"
        ok={() => {
          setOpenModalSuccess(false);
          exampleListAction.list(dispatchExample);
          goToList();
        }}
        cancel={() => setOpenModalSuccess(false)}
      />
    );
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {content()}
      {modalSuccessCreate()}
    </SnbContainer>
  );
};

export default ExampleCreateView;
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
