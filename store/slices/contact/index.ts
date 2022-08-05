import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactState } from './interfaces';

const initialState: ContactState = {
  contact: {},
  isLoading: false,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    startLoadingContact: (state: ContactState, /* action */) => {
      state.isLoading = true;
    },
    setContact: (state: ContactState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.contact = action?.payload?.contact;
    },
  }
});


// Action creators are generated for each case reducer function
export const { startLoadingContact, setContact } = contactSlice.actions;