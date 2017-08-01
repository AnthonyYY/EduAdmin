import { Component, OnInit } from '@angular/core';
import {Role} from "../models/role";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {

  roles:Array<Role>;
  visibleRows: number;
  constructor() { }

  ngOnInit() {
    this.visibleRows = 16;
    this.roles = [
      new Role('1','2','Anthony','多少空间裂缝你卡的废话你啦还是；的历史开奖记录啊啥都放假了',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','撒旦撒大大开发了；',false),
      new Role('1','2','Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了',false),
      new Role('1','2','Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了',false),
      new Role('1','2','Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了',false),
      new Role('1','2','Anthony','阿瑟发动回家哪里看发布会；的历史开奖记录啊啥都放假了',false)
    ]
  }
}
