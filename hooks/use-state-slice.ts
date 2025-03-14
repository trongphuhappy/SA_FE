import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  backdrop: {
    status: false | true;
  };
  searchDialog: {
    open: false | true;
  };
  updateAvatarProfileDialog: {
    open: false | true;
  };
  updateProfileDialog: {
    openEmail: false | true;
    openFirstName: false | true;
    openLastName: false | true;
    openUpdateLessor: false | true;
  };
}

const initialState: InitialState = {
  backdrop: { status: false },
  searchDialog: { open: false },
  updateAvatarProfileDialog: { open: false },
  updateProfileDialog: {
    openEmail: false,
    openFirstName: false,
    openLastName: false,
    openUpdateLessor: false,
  },
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState: initialState,
  reducers: {
    openBackdrop: (state) => {
      state.backdrop.status = true;
    },
    closeBackdrop: (state) => {
      state.backdrop.status = false;
    },
    openSearchDialog: (state) => {
      state.searchDialog.open = true;
    },
    closeSearchDialog: (state) => {
      state.searchDialog.open = false;
    },
    openUpdateAvatarProfileDialog: (state) => {
      state.updateAvatarProfileDialog.open = true;
    },
    closeUpdateAvatarProfileDialog: (state) => {
      state.updateAvatarProfileDialog.open = false;
    },
    openUpdateEmailDialog: (state) => {
      state.updateProfileDialog.openEmail = true;
    },
    closeUpdateEmailDialog: (state) => {
      state.updateProfileDialog.openEmail = false;
    },
    openUpdateFirstNameDialog: (state) => {
      state.updateProfileDialog.openFirstName = true;
    },
    closeUpdateFirstNameDialog: (state) => {
      state.updateProfileDialog.openFirstName = false;
    },
    openUpdateLastNameDialog: (state) => {
      state.updateProfileDialog.openLastName = true;
    },
    closeUpdateLastNameDialog: (state) => {
      state.updateProfileDialog.openLastName = false;
    },
  },
});

export const {
  openBackdrop,
  closeBackdrop,
  openSearchDialog,
  closeSearchDialog,
  openUpdateAvatarProfileDialog,
  closeUpdateAvatarProfileDialog,
  openUpdateEmailDialog,
  closeUpdateEmailDialog,
  openUpdateFirstNameDialog,
  closeUpdateFirstNameDialog,
  openUpdateLastNameDialog,
  closeUpdateLastNameDialog,
} = stateSlice.actions;

export default stateSlice.reducer;