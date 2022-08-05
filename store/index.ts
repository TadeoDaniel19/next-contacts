import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { contactsSlice } from './slices/contacts';
import { contactSlice } from './slices/contact/';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    contact: contactSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;