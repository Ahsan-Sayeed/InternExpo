import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../Feature/AuthSlice/AuthSlice';
import SideNavSlice from '../Feature/SideNavSlice/SideNavSlice';

export const Store = configureStore({
    reducer:{
        sideNav:SideNavSlice,
        Auth: AuthSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export default Store;