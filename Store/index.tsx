import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { DashNavigationSlice } from "../Slices/DashNavigationSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [DashNavigationSlice.name]: DashNavigationSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper(makeStore, { debug: true });
// export const wrapper = createWrapper<AppStore>(makeStore);
