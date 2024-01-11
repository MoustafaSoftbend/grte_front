import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../Store/Store";
import { HYDRATE } from "next-redux-wrapper";

export interface TableState {}

const initialState: TableState = {
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
