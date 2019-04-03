import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";

import { StoreModule } from "@ngrx/store";
import { metaReducers, rootReducers } from "./store/state/root";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { PersonasEffects } from "../persona/state/personas.effects";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([PersonasEffects])
  ],
  declarations: []
})
export class CoreModule {}
