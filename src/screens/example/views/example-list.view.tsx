/** === IMPORT PACKAGE ===  */
import React from 'react';
import { View, FlatList } from 'react-native';
import {
  SnbContainer,
  SnbTopNav,
  SnbButton,
  SnbProgress,
  SnbCardInfoType1,
  SnbText,
  SnbDialog,
} from 'react-native-sinbad-ui';
/** === IMPORT EXTERNAL COMPONENT === */
/** === IMPORT EXTERNAL FUNCTION === */
import * as models from '@models';
import { contexts } from '@contexts';
import {
  goBack,
  useExampleListAction,
  useExampleDeleteAction,
  goToDetail,
  goToUpdate,
} from '../functions';
/** === STYLES === */
import { ExampleStyles } from '../styles';
/** === INTERFACE/MODEL === */
/** === COMPONENT === */
const ExampleListView: React.FC = () => {
  /** === HOOK === */
  const exampleListAction = useExampleListAction();
  const exampleDetailAction = useExampleDeleteAction();
  const { stateExample, dispatchExample } = React.useContext(
    contexts.ExampleContext,
  );
  /** === STATE === */
  const [openModalConfirmationDelete, setOpenModalConfirmationDelete] =
    React.useState(false);
  const [id, setId] = React.useState('');
  const [heightFlatList, setHeightFlatList] = React.useState(0);
  const [heightContent, setHeightContent] = React.useState(0);
  /** === EFFECT === */
  /** => get list */
  React.useEffect(() => {
    exampleListAction.list(dispatchExample);
    return () => {
      exampleListAction.reset(dispatchExample);
    };
  }, []);
  /** => checking delete success */
  React.useEffect(() => {
    if (stateExample.delete.data !== null) {
      setOpenModalConfirmationDelete(false);
      exampleListAction.list(dispatchExample);
    }
  }, [stateExample.delete.data]);
  /** === VIEW === */
  /** => header */
  const header = () => {
    return <SnbTopNav.Type3 type="red" title={'List'} backAction={goBack} />;
  };
  /** => render item */
  const renderItem = ({
    item,
    index,
  }: {
    item: models.Example;
    index: number;
  }) => {
    return (
      <View key={index}>
        <SnbCardInfoType1 title={item.id} message={item.status} />
        <View style={ExampleStyles.itemLayout}>
          <SnbButton.Single
            title={'Detail'}
            onPress={() => goToDetail(item.id)}
            type={'primary'}
          />
          <SnbButton.Single
            title={'Update'}
            onPress={() => goToUpdate(item.id)}
            type={'primary'}
          />
          <SnbButton.Single
            title={'Delete'}
            onPress={() => {
              setOpenModalConfirmationDelete(true);
              setId(item.id);
            }}
            type={'primary'}
          />
        </View>
      </View>
    );
  };
  /** => content */
  const content = () => {
    return (
      <FlatList
        contentContainerStyle={ExampleStyles.flatListContainer}
        data={stateExample.list.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={stateExample.list.refresh}
        onRefresh={() => exampleListAction.refresh(dispatchExample)}
        onEndReachedThreshold={0.1}
        onEndReached={() =>
          exampleListAction.loadMore(dispatchExample, stateExample.list)
        }
        showsVerticalScrollIndicator
        ListFooterComponent={loadingLoadMore}
      />
    );
  };
  /** => loading load more */
  const loadingLoadMore = () => {
    return (
      <View style={ExampleStyles.loadingLoadMore}>
        {stateExample.list.loadMore ? <SnbText.B1>load more</SnbText.B1> : null}
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
    return stateExample.list.loading ? loading() : content();
  };
  /** => modal confirmation delete */
  const modalConfirmationDelete = () => {
    return (
      <SnbDialog
        open={openModalConfirmationDelete}
        loading={stateExample.delete.loading}
        title="Confirmation Delete"
        content="Are your sure?"
        ok={() => exampleDetailAction.delete(dispatchExample, id)}
        cancel={() => setOpenModalConfirmationDelete(false)}
      />
    );
  };
  /** => main */
  return (
    <SnbContainer color="white">
      {header()}
      {process()}
      {modalConfirmationDelete()}
    </SnbContainer>
  );
};

export default ExampleListView;
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
