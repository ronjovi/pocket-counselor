import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import userSessionReducer from "./slices/userSessionSlice";
import appReducer from "./slices/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["appReducer"],
};

const reducer = combineReducers({
  userSessionReducer,
  appReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * Create redux store by combing all the reducer slices
 */
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development" ? true : false, // only enable in dev
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
