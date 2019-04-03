import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PersonasService } from "../persona.service";
import { Persona } from "../persona.model";
import {
  PersonasActions,
  PersonasActionTypes,
  LoadPersonas,
  LoadPersonasError,
  LoadPersonasOK,
  LoadPersona,
  LoadPersonaOK,
  LoadPersonaError
} from "./personas.actions";

@Injectable()
export class PersonasEffects {
  constructor(private actions$: Actions, private personas: PersonasService) {}

  @Effect()
  public loadPersonasEffect$: Observable<PersonasActions> = this.actions$.pipe(
    ofType<LoadPersonas>(PersonasActionTypes.LoadPersonas),
    mergeMap(() =>
      this.personas.getPersonas$().pipe(
        map((personas: Persona[]) => new LoadPersonasOK(personas)),
        catchError(err => of(new LoadPersonasError("Error loading personas")))
      )
    )
  );

  @Effect()
  public loadPersonaEffect$: Observable<PersonasActions> = this.actions$.pipe(
    ofType<LoadPersona>(PersonasActionTypes.LoadPersona),
    mergeMap((action: LoadPersona) =>
      this.personas.getPersona$(action.payload).pipe(
        map((persona: Persona) => new LoadPersonaOK(persona)),
        catchError(err => of(new LoadPersonaError("Error loading personaa")))
      )
    )
  );
}
