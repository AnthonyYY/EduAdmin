import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  expandMenu: boolean;
  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    this.toggle.emit(!this.expandMenu);
  }

}
