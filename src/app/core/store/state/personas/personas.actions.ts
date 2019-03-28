import { Action } from "@ngrx/store";
import { Persona } from "../../../../persona/persona.model";

export enum PersonasActionTypes {
  LoadPersonas = "[Personas] Load Personas",
  LoadPersonasOK = "[Personas] Load Personas OK",
  LoadPersonasError = "[Personas] Load Personas Error",
  LoadPersona = "[Personas] Load Persona",
  LoadPersonaOK = "[Personas] Load Persona OK",
  LoadPersonaError = "[Personas] Load Persona Error"
}

export class LoadPersonas implements Action {
  readonly type = PersonasActionTypes.LoadPersonas;
  constructor() {}
}

export class LoadPersonasOK implements Action {
  readonly type = PersonasActionTypes.LoadPersonasOK;
  constructor(public payload: Persona[]) {}
}

export class LoadPersonasError implements Action {
  readonly type = PersonasActionTypes.LoadPersonasError;
  constructor(public payload: string) {}
}

export class LoadPersona implements Action {
  readonly type = PersonasActionTypes.LoadPersona;
  constructor(public payload: number) {}
}

export class LoadPersonaOK implements Action {
  readonly type = PersonasActionTypes.LoadPersonaOK;
  constructor(public payload: Persona) {}
}

export class LoadPersonaError implements Action {
  readonly type = PersonasActionTypes.LoadPersonaError;
  constructor(public payload: string) {}
}

export type PersonasActions =
  | LoadPersonas
  | LoadPersonasOK
  | LoadPersonasError
  | LoadPersona
  | LoadPersonaOK
  | LoadPersonaError;
