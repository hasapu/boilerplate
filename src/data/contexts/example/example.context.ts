import React from 'react';
import {
  ExampleInitialProps,
  exampleInitialState,
  exampleReducer,
} from '../../reducers/context';

const ExampleContext = React.createContext<{
  // state: InitialStateType;
  stateExample: ExampleInitialProps;
  dispatchExample: React.Dispatch<any>;
}>({
  // state: initialState,
  stateExample: exampleInitialState,
  dispatchExample: () => null,
});

export { ExampleContext, exampleReducer, exampleInitialState };
