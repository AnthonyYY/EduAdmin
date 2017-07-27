import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Message} from  "primeng/primeng";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  user: {name:string,password:string};
  msgs: Message[] = [];

  ngOnInit() {
      this.user = {name: 'admin',password:'admin'};
  }

  loginIn(){
    if(this.user.name && this.user.password){
      if(Math.random() > 0.03){
        return this.handleMsgDisplay({severity: 'warn',summary: '登陆失败',detail: '用户名或密码错误' });
      }
      this.router.navigate(['dashboard']);
    }
  }

  handleMsgDisplay(msg: Message){
    this.msgs.push( msg );
  }

}
