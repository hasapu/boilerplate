import { StyleSheet } from 'react-native';

const ExampleStyles = StyleSheet.create({
  container: {
    height: 300,
    paddingTop: 16,
  },
  detailContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  flatListContainer: {
    paddingBottom: 30,
  },
  loadingLoadMore: {
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemLayout: {
    flexDirection: 'row',
  },
});

export default ExampleStyles;
