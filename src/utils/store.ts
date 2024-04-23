import { configureStore } from '@reduxjs/toolkit';
import containerSlice from './containerSlice';
import articleSlice from './articleSlice';
const store = configureStore({
    reducer: {
        container: containerSlice.reducer,
        article: articleSlice.reducer
    },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;