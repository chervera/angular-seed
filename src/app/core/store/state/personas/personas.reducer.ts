import { PersonasActions, PersonasActionTypes } from "./personas.actions";
import { PersonasState, initialPersonasState } from "./personas.state";

export function personasReducer(
  state = initialPersonasState,
  action: PersonasActions
): PersonasState {
  switch (action.type) {
    case PersonasActionTypes.LoadPersonas:
      return {
        personas: null,
        working: true,
        completed: false,
        message: "Loading...",
        persona: null
      };
    case PersonasActionTypes.LoadPersonasOK:
      return {
        personas: action.payload,
        working: false,
        completed: true,
        message: `${action.payload.length} personas loaded.`,
        persona: null
      };
    case PersonasActionTypes.LoadPersonasError:
      return {
        personas: [],
        working: false,
        completed: false,
        message: action.payload,
        persona: null
      };
    case PersonasActionTypes.LoadPersona:
      return {
        ...state
      };
    case PersonasActionTypes.LoadPersonaOK:
      return {
        ...state,
        persona: action.payload
      };
    case PersonasActionTypes.LoadPersonaError:
      return {
        ...state,
        message: action.payload,
        persona: null
      };
    default:
      return state;
  }
}
