import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice.js';
import productSlice from './productSlice.js';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root', // Key for storage
    storage,
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authSlice,
    product: productSlice
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // To avoid serializability warning
        }),
});

const persistor = persistStore(store);
export { store, persistor };

