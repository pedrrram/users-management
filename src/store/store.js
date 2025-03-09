import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./slices/usersAPI.slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import favoritesReducer from "./slices/favorites.slice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: "favorites",
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      usersApi.middleware
    ),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
