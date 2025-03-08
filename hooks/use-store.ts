import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import stateSlice from "@/hooks/use-state-slice";
import userSlice from "@/hooks/user-slice";
import differenceSlice from "@/hooks/use-difference-slice";
import userProfileslice from "@/hooks/use-user-profile-slice";
import authSlice from "@/hooks/use-auth-slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["stateSlice", "quickViewProductSlice", "rentSlice", "authSlice"],
  whitelist: ["userSlice", "categorySlice", "homeSlice"],
};

const rootReducer = combineReducers({
  stateSlice: stateSlice,
  userSlice: userSlice,
  differenceSlice: differenceSlice,
  userProfileslice: userProfileslice,
  authSlice: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);