import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Params } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map, take, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
//import { GlobalStoreService } from '../../core/global-store.service';
import { Log } from "../log.model";
import { RootState } from "../../core/store/state/root/root.state";
import { LoadLogs, LoadLog } from "src/app/log/state/log.actions";
import { logsSelector, logSelector } from "src/app/log/state/log.state";
import { pipe } from "@angular/core/src/render3";

@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogComponent implements OnInit {
  public logs$: Observable<Log[]>;
  public log$: Observable<Log>;

  public log: Log;

  constructor(private store: Store<RootState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadLogs());
    this.subscribeToChanges();
  }

  private subscribeToChanges() {
    this.logs$ = this.store.select(logsSelector);
    this.log$ = this.store.select(logSelector).pipe(tap(this.onLogGotten));
  }

  public select(logId: number) {
    this.store.dispatch(new LoadLog(logId));
  }

  private onLogGotten = (log: Log) => {
    this.log = log;
  };
}
