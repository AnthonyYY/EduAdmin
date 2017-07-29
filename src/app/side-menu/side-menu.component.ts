import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {
  menuItems:MenuItem;
  constructor() { }
  ngOnInit() {
    this.menuItems = [
      {
        label: '基础信息管理',
        expanded: true,
        items: [{
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
        }]      },
      {
        label: '审核流程管理',
        items: [{
          label: '校区信息',
          icon: 'fa-building',
          routerLink: ['sc2hools']
        },{
          label: '学生信息',
          icon: 'fa-graduation-cap',
          routerLink: ['stu3dents']
        },{
          label: '用户信息',
          icon: 'fa-user-circle-o',
          routerLink: ['use2rs']
        }]      },
      {
        label: '教学流程管理',
        items: [{
          label: '课程信息',
          icon: 'fa-book',
          routerLink: ['syllabus1']
        },{
          label: '员工信息',
          icon: 'fa-users',
          routerLink: ['employees1']
        }]
      },
      {
        label: '一级菜单',
        items: []
      },
      {
        label: '一级菜单',
        items: []
      }
    ]
  }
}
