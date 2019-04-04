import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogComponent } from "./log/log.component";
//import { TravelGuard } from "./travel.guard";

const routes: Routes = [
  {
    path: ":id",
    component: LogComponent
    //canDeactivate: [TravelGuard]
  },
  {
    path: "",
    component: LogComponent
    //canDeactivate: [TravelGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule {}
