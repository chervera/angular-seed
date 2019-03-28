import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Persona } from "./persona.model";

@Injectable({
  providedIn: "root"
})
export class PersonasService {
  private readonly personasUrl = environment.apiUrl + "personas";

  constructor(private http: HttpClient) {}

  public getPersonas$ = (): Observable<Persona[]> =>
    this.http.get<Persona[]>(this.personasUrl);
  public getPersona$ = (personaId: number): Observable<Persona> =>
    this.findPersonaById$(this.getPersonas$(), personaId);

  private findPersonaById$ = (
    personas$: Observable<Persona[]>,
    personaId: number
  ) =>
    personas$.pipe(map(personas => this.findPersonaById(personas, personaId)));
  private findPersonaById = (personas: Persona[], personaId: number): Persona =>
    personas.find(persona => persona.id === personaId);
}
