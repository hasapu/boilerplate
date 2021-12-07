/** === IMPORT PACKAGE HERE === */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SnbContainer, SnbText } from 'react-native-sinbad-ui';
import {
  useExampleListAction,
  useExampleDetailAction,
  useExampleCreateAction,
  useExampleUpdateAction,
  useExampleDeleteAction,
} from '../../example/functions';
import { useAuthAction } from '@core/functions/auth/auth-hook.function';
import { contexts } from '@contexts';
/** === COMPONENT === */
const HomeView: React.FC = () => {
  const exampleListAction = useExampleListAction();
  const exampleDetailAction = useExampleDetailAction();
  const exampleCreateAction = useExampleCreateAction();
  const exampleUpdateAction = useExampleUpdateAction();
  const exampleDeleteAction = useExampleDeleteAction();
  const authAction = useAuthAction();
  const { stateExample, dispatchExample } = React.useContext(
    contexts.ExampleContext,
  );
  React.useEffect(() => {
    console.log(stateExample);
  }, [stateExample]);
  /** => main */
  return (
    <SnbContainer color="white">
      <TouchableOpacity
        onPress={() =>
          authAction.loginUserName({
            username: '34389791',
            password: 'sinbad',
          })
        }
        style={{
          borderWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SnbText.B1>login</SnbText.B1>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => authAction.logout()}
        style={{
          borderWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SnbText.B1>logout</SnbText.B1>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // exampleListAction.reset(dispatchExample);
          // exampleListAction.list(dispatchExample);
          // exampleListAction.refresh(dispatchExample);
          // exampleDetailAction.detail(
          //   dispatchExample,
          //   '0839a8c4-5570-4ea5-9385-e1f5fb55f550',
          // );
          // exampleCreateAction.create(dispatchExample, {
          //   items: [{ name: 'minyak', price: 2000, qty: 3 }],
          // });
          // exampleUpdateAction.update(
          //   dispatchExample,
          //   '0839a8c4-5570-4ea5-9385-e1f5fb55f550',
          //   {
          //     status: 'draf',
          //   },
          // );
          exampleDeleteAction.delete(
            dispatchExample,
            '0839a8c4-5570-4ea5-9385-e1f5fb55f550',
          );
        }}
        style={{
          borderWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SnbText.B1>get List</SnbText.B1>
      </TouchableOpacity>
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
