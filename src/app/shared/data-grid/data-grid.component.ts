import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.css"]
})
export class DataGridComponent implements OnInit {
  @Input()
  public items: Array<any>;

  @Output() selected = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() {}

  select(id: string | number) {
    this.selected.emit(id);
  }
}
