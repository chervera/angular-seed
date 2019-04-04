import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogComponent } from "./log/log.component";
import { LogRoutingModule } from "./log-routing.module";
import { SharedModule } from "../shared/shared.module";
import { EffectsModule } from "@ngrx/effects";
import { LogsEffects } from "./state/log.effects";

@NgModule({
  imports: [
    CommonModule,
    LogRoutingModule,
    SharedModule,
    EffectsModule.forRoot([LogsEffects])
  ],
  declarations: [LogComponent]
})
export class LogsModule {}
