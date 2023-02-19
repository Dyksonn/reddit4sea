import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { subredditsReducer } from "./slices/subreddits";

const reducers = combineReducers({
  subreddits: subredditsReducer,
});

const persistConfig = {
  key: "@reddits4sea",
  storage: AsyncStorage,
  whitelist: ["subreddits"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

let persistor = persistStore(store);

export { store, persistor };
