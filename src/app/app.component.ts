import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  template: `
    hola
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
