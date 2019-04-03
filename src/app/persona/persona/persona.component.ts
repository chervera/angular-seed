import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Params } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map, take, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
//import { GlobalStoreService } from '../../core/global-store.service';
import { Persona } from "../persona.model";
import { RootState } from "../../core/store/state/root/root.state";
import {
  LoadPersonas,
  LoadPersona
} from "src/app/persona/state/personas.actions";
import {
  personasSelector,
  personaSelector
} from "src/app/persona/state/personas.state";
import { pipe } from "@angular/core/src/render3";

@Component({
  selector: "app-persona",
  templateUrl: "./persona.component.html",
  styleUrls: ["./persona.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent implements OnInit {
  public personas$: Observable<Persona[]>;
  public persona$: Observable<Persona>;

  public persona: Persona;

  constructor(private store: Store<RootState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new LoadPersonas());
    this.subscribeToChanges();
  }

  private subscribeToChanges() {
    this.personas$ = this.store.select(personasSelector);
    this.persona$ = this.store
      .select(personaSelector)
      .pipe(tap(this.onPersonaGotten));
  }

  public select(personaId: number) {
    this.store.dispatch(new LoadPersona(personaId));
  }

  private onPersonaGotten = (persona: Persona) => {
    this.persona = persona;
  };
}
