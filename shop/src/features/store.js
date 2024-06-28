import { configureStore } from '@reduxjs/toolkit';
import shopInfo from './shopInfo/shopInfoSlice';

export const store = configureStore({
    reducer: {
        shopInfo: shopInfo,
    },
});

export default store;
