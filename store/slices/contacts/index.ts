import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactState } from './interfaces';

const initialState: ContactState = {
  pagination: {
    page: 1,
    totalCount: 0,
    totalPages: 0,
  },
  results: [],
  isLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    startLoadingContacts: (state: ContactState, /* action */) => {
      state.isLoading = true;
    },
    setContacts: (state: ContactState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.pagination = {
        page: action?.payload?.pagination.page,
        totalCount: action?.payload?.pagination.totalCount,
        totalPages: action?.payload?.pagination.totalPages,
      };
      state.results = action?.payload?.results;
    },
  }
});


// Action creators are generated for each case reducer function
export const { startLoadingContacts, setContacts } = contactsSlice.actions;