import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import {PersistGate} from 'redux-persist/integration/react';
import Wrapper from "../src/components/Wrapper";
const {store,persistor} = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Wrapper />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
serviceWorker.unregister();
