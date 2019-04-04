import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "logs",
    loadChildren: "./log/log.module#LogsModule"
  },
  {
    path: "personas",
    loadChildren: "./persona/persona.module#PersonaModule"
  },
  { path: "", redirectTo: "/logs", pathMatch: "full" },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
