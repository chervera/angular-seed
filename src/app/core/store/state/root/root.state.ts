import { PersonasState } from "../../../../persona/state/personas.state";
import { GlobalState } from "../global/global.state";

export interface RootState {
  router: any;
  global: GlobalState;
  personas: PersonasState;
}
