export interface Log {
  id: number;
  app: string;
  browser: {
    appName: string;
    browser: string;
    fullVersion: string;
    majorVersion: number;
    userAgent: string;
  };
  error: {
    column: number;
    line: number;
    msg: string;
    trace: {
      message: string;
      stack: string;
    };
  };
  loggedUserId: number | string;
  state: any;
  version: string;
}
