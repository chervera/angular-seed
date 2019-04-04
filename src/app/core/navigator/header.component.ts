import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-header",
  template: `
    <nav class="nav">
      <a routerLink="/personas">Personas</a>
      <a routerLink="/logs">Logs</a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
