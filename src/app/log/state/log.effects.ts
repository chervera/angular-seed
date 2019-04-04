import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { LogService } from "../log.service";
import { Log } from "../log.model";
import {
  LogsActions,
  LogsActionTypes,
  LoadLogs,
  LoadLogsError,
  LoadLogsOK,
  LoadLog,
  LoadLogOK,
  LoadLogError
} from "./log.actions";

@Injectable()
export class LogsEffects {
  constructor(private actions$: Actions, private logs: LogService) {}

  @Effect()
  public loadLogsEffect$: Observable<LogsActions> = this.actions$.pipe(
    ofType<LoadLogs>(LogsActionTypes.LoadLogs),
    mergeMap(() =>
      this.logs.getLogs$().pipe(
        map((logs: Log[]) => new LoadLogsOK(logs)),
        catchError(err => of(new LoadLogsError("Error loading logs")))
      )
    )
  );

  @Effect()
  public loadLogEffect$: Observable<LogsActions> = this.actions$.pipe(
    ofType<LoadLog>(LogsActionTypes.LoadLog),
    mergeMap((action: LoadLog) =>
      this.logs.getLog$(action.payload).pipe(
        map((log: Log) => new LoadLogOK(log)),
        catchError(err => of(new LoadLogError("Error loading loga")))
      )
    )
  );
}
