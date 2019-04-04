import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Log } from "../log.model";

export interface LogsState {
  logs: Log[];
  working: boolean;
  completed: boolean;
  message: string;
  log: Log;
}

export const initialLogsState: LogsState = {
  logs: [],
  working: false,
  completed: false,
  message: "",
  log: null
};

export const logsFeatureSelector = createFeatureSelector("logs");

export const logsSelector = createSelector(
  logsFeatureSelector,
  (state: LogsState) => state.logs
);

export const logSelector = createSelector(
  logsFeatureSelector,
  (state: LogsState) => state.log
);
