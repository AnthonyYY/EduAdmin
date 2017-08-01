import { Component, OnInit } from '@angular/core';
import {Role} from "../models/role";
import {ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {

  roles:Array<Role>;
  chosenRole: Role;
  selectionRole: Role;
  showRoleDialog: boolean;
  visibleRows: number;
  constructor(
    private confirmationService:ConfirmationService
  ) { }

  ngOnInit() {
    this.showRoleDialog = false;
    this.chosenRole = new Role('1','12','Anthony','啊都是发哈厉害',false);
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

  openRoleDialog(role): void{
    this.selectionRole = role;
    this.chosenRole = {...role};
    this.showRoleDialog = true;
  }

  saveEditedRole():void{
    if(this.chosenRole.id){
      const index = this.findChosenRoleIndex();
      this.roles[index] = this.chosenRole;
    }else{
      this.chosenRole.id = '22';
      this.roles.unshift(this.chosenRole);
    }
    this.roles = [...this.roles];
    this.showRoleDialog = false;
  }

  findChosenRoleIndex(): number{
    return this.roles.indexOf(this.selectionRole);
  }

  showAdderDialog():void{
    this.chosenRole = new Role('','','','',false);
    this.showRoleDialog = true;
  }
}
