import { LogsActions, LogsActionTypes } from "./log.actions";
import { LogsState, initialLogsState } from "./log.state";

export function logsReducer(
  state = initialLogsState,
  action: LogsActions
): LogsState {
  switch (action.type) {
    case LogsActionTypes.LoadLogs:
      return {
        logs: null,
        working: true,
        completed: false,
        message: "Loading...",
        log: null
      };
    case LogsActionTypes.LoadLogsOK:
      return {
        logs: action.payload,
        working: false,
        completed: true,
        message: `${action.payload.length} logs loaded.`,
        log: null
      };
    case LogsActionTypes.LoadLogsError:
      return {
        logs: [],
        working: false,
        completed: false,
        message: action.payload,
        log: null
      };
    case LogsActionTypes.LoadLog:
      return {
        ...state
      };
    case LogsActionTypes.LoadLogOK:
      return {
        ...state,
        log: action.payload
      };
    case LogsActionTypes.LoadLogError:
      return {
        ...state,
        message: action.payload,
        log: null
      };
    default:
      return state;
  }
}
