import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {

  menu: Array<{label:string,icon:string,routerLink: Array<string>}>;
  @Input()
  menuCollapsed: boolean;
  constructor() { }

  ngOnInit() {

    this.menuCollapsed = document.querySelector('body').clientWidth < 767;

    this.menu = [{
      label: '课程信息',
      icon: 'fa-book',
      routerLink: ['syllabus']
    },{
      label: '员工信息',
      icon: 'fa-users',
      routerLink: ['employees']
    },{
      label: '角色信息',
      icon: 'fa-user',
      routerLink: ['roles']
    },{
      label: '校区信息',
      icon: 'fa-building',
      routerLink: ['schools']
    },{
      label: '学生信息',
      icon: 'fa-graduation-cap',
      routerLink: ['students']
    },{
      label: '用户信息',
      icon: 'fa-user-circle-o',
      routerLink: ['users']
    }]
  }
}