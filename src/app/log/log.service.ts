import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Log } from "./log.model";

@Injectable({
  providedIn: "root"
})
export class LogService {
  private readonly logsUrl = environment.apiUrl + "logs";

  constructor(private http: HttpClient) {}

  public getLogs$ = (): Observable<Log[]> => this.http.get<Log[]>(this.logsUrl);
  public getLog$ = (logId: number): Observable<Log> =>
    this.findLogById$(this.getLogs$(), logId);

  private findLogById$ = (logs$: Observable<Log[]>, logId: number) =>
    logs$.pipe(map(logs => this.findLogById(logs, logId)));
  private findLogById = (logs: Log[], logId: number): Log =>
    logs.find(log => log.id === logId);
}
