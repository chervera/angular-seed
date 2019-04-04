import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonaComponent } from "./persona/persona.component";
import { PersonaRoutingModule } from "./persona-routing.module";
import { SharedModule } from "../shared/shared.module";
import { EffectsModule } from "@ngrx/effects";
import { PersonasEffects } from "./state/personas.effects";

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule,
    EffectsModule.forRoot([PersonasEffects])
  ],
  declarations: [PersonaComponent]
})
export class PersonaModule {}
