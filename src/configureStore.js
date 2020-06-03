import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/MainReducer'
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["setUserInfo"],
};
const logger = createLogger({
  collapsed :false,
  level: 'warn',
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer,applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}