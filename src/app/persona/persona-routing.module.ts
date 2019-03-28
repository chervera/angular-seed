import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonaComponent } from "./persona/persona.component";
//import { TravelGuard } from "./travel.guard";

const routes: Routes = [
  {
    path: ":personaId",
    component: PersonaComponent
    //canDeactivate: [TravelGuard]
  },
  {
    path: "",
    component: PersonaComponent
    //canDeactivate: [TravelGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule {}
