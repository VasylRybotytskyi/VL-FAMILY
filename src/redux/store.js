import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice"; // Імпортуйте користувача
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesSlice from "./slices/favoritesSlice";
import cartSlice from "./slices/cartSlice";
import { foodApi } from "./services/foodApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice);
const persistedUserReducer = persistReducer(persistConfig, userSlice);
const persistedCartReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    favorite: persistedFavoritesReducer,
    user: persistedUserReducer,
    cart: persistedCartReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(foodApi.middleware),
});

export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
