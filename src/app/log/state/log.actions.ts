import { Action } from "@ngrx/store";
import { Log } from "../log.model";

export enum LogsActionTypes {
  LoadLogs = "[Logs] Load Logs",
  LoadLogsOK = "[Logs] Load Logs OK",
  LoadLogsError = "[Logs] Load Logs Error",
  LoadLog = "[Logs] Load Log",
  LoadLogOK = "[Logs] Load Log OK",
  LoadLogError = "[Logs] Load Log Error"
}

export class LoadLogs implements Action {
  readonly type = LogsActionTypes.LoadLogs;
  constructor() {}
}

export class LoadLogsOK implements Action {
  readonly type = LogsActionTypes.LoadLogsOK;
  constructor(public payload: Log[]) {}
}

export class LoadLogsError implements Action {
  readonly type = LogsActionTypes.LoadLogsError;
  constructor(public payload: string) {}
}

export class LoadLog implements Action {
  readonly type = LogsActionTypes.LoadLog;
  constructor(public payload: number) {}
}

export class LoadLogOK implements Action {
  readonly type = LogsActionTypes.LoadLogOK;
  constructor(public payload: Log) {}
}

export class LoadLogError implements Action {
  readonly type = LogsActionTypes.LoadLogError;
  constructor(public payload: string) {}
}

export type LogsActions =
  | LoadLogs
  | LoadLogsOK
  | LoadLogsError
  | LoadLog
  | LoadLogOK
  | LoadLogError;
