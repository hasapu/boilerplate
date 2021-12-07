/** === IMPORT FUNCTION === */
import { NavigationAction } from '@navigation';
/** === FUNCTIONS === */
/** => go back */
const goBack = () => {
  NavigationAction.back();
};
/** => go to list */
const goToList = () => {
  NavigationAction.navigate('ExampleListView');
};
/** => go to detail */
const goToDetail = (id: string) => {
  NavigationAction.navigate('ExampleDetailView', { id });
};
/** => go to create */
const goToCreate = () => {
  NavigationAction.navigate('ExampleCreateView');
};
/** => go to update */
const goToUpdate = (id: string) => {
  NavigationAction.navigate('ExampleUpdateView', { id });
};
/** => go to delete */
const goToDelete = () => {
  NavigationAction.navigate('ExampleDeleteView');
};
/** === EXPORT === */
export { goBack, goToList, goToDetail, goToCreate, goToUpdate, goToDelete };
