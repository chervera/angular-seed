import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer"></footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  @Input()
  public message: string;
  constructor() {}

  ngOnInit() {}
}
