import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Persona } from "../../../../persona/persona.model";

export interface PersonasState {
  personas: Persona[];
  working: boolean;
  completed: boolean;
  message: string;
  persona: Persona;
}

export const initialPersonasState: PersonasState = {
  personas: [],
  working: false,
  completed: false,
  message: "",
  persona: null
};

export const personasFeatureSelector = createFeatureSelector("personas");
export const personasSelector = createSelector(
  personasFeatureSelector,
  (state: PersonasState) => state.personas
);

export const personaSelector = createSelector(
  personasFeatureSelector,
  (state: PersonasState) => state.persona
);
