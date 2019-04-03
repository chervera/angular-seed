import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  SendUserMessage = '[Global] Show Message',
  IsLoginNeeded = '[Auth] Is Login Needed',
  StoreToken = '[Auth] Store Token'
}

export class SendUserMesage implements Action {
  readonly type = GlobalActionTypes.SendUserMessage;
  constructor(public payload: string) {}
}

export class IsLoginNeeded implements Action {
  readonly type = GlobalActionTypes.IsLoginNeeded;
  constructor(public payload: boolean) {}
}

export class StoreToken implements Action {
  readonly type = GlobalActionTypes.StoreToken;
  constructor(public payload: string) {}
}

export type GlobalActions = SendUserMesage | IsLoginNeeded | StoreToken;
