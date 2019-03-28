import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonaComponent } from "./persona/persona.component";
import { PersonaRoutingModule } from "./persona-routing.module";

@NgModule({
  imports: [CommonModule, PersonaRoutingModule],
  declarations: [PersonaComponent]
})
export class PersonaModule {}
