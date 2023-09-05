import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobsSlice';

export const store = configureStore({
  reducer: {
    jobsData: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch