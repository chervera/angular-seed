import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalStoreService } from "../global-store.service";

@Component({
  selector: "app-navigator",
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer [message]="userMessage$ | async"></app-footer>
  `,
  styles: []
})
export class NavigatorComponent implements OnInit {
  public userMessage$;
  constructor(
    private globalStore: GlobalStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.globalStore.selectLoginNeeded$().subscribe(this.onLoginNeededChange);
    this.userMessage$ = this.globalStore.selectUserMessage$();
  }

  private onLoginNeededChange = (loginNeeded: boolean) => {
    if (loginNeeded) {
      this.router.navigateByUrl("/auth");
    } else {
      this.router.navigateByUrl("/");
    }
  };
}
