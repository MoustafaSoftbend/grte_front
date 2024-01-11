import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../Store/Store";
import { HYDRATE } from "next-redux-wrapper";

export interface DashNavigationState {
  dashElReference: number;
  previewDisplay: boolean;
  lastActionTrigger: string;
}

const initialState: DashNavigationState = {
  dashElReference: null,
  previewDisplay: true,
  lastActionTrigger: "",
};

export const DashNavigationSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setDashNavigationState(state, action) {
      state.dashElReference = action.payload;
    },
    setPreviewDisplay(state, action) {
      state.previewDisplay = action.payload;
    },
    setLastActionTrigger(state, action) {
      state.lastActionTrigger = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.dash,
      };
    },
  },
});

export const { setDashNavigationState } = DashNavigationSlice.actions;
export const { setPreviewDisplay } = DashNavigationSlice.actions;
export const { setLastActionTrigger } = DashNavigationSlice.actions;
export const selectDashState = (state: AppState) => state.dash;
export default DashNavigationSlice.reducer;
