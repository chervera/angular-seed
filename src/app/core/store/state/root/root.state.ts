import { PersonasState } from "../personas/personas.state";
//import { Global } from "../global/global.state";

export interface RootState {
  router: any;
  //global: Global;
  personas: PersonasState;
}
