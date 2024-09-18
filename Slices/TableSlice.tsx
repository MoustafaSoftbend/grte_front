import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../Store";
import { HYDRATE } from "next-redux-wrapper";

interface TableState {
  dashElReference: HTMLElement | null; // Use the appropriate type
  previewDisplay: boolean; // Assuming this is another property you have
  isFullScreen: boolean;
}

const initialState: TableState = {
  dashElReference: null, // Use the appropriate type
  previewDisplay: true,
  isFullScreen: false,
};

export const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    setTableState(state, action) {
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

export const { setTableState } = TableSlice.actions;
export const { setPreviewDisplay } = TableSlice.actions;
export const { setLastActionTrigger } = TableSlice.actions;
export const selectDashState = (state: AppState) => state.dash;
export default TableSlice.reducer;
