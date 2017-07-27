import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  expandMenu: boolean;
  constructor() { }

  ngOnInit() {
    this.expandMenu = false;
  }

  toggleMenu($event) {
    this.expandMenu = $event;
  }

}
