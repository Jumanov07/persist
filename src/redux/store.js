import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { signInSlice } from "./slices/sign-in-slice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const rootReducer = combineReducers({
  [signInSlice.name]: signInSlice.reducer,
});

const persistConfig = {
  key: "ALISHER",
  storage,
  whitelist: ["signIn"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
