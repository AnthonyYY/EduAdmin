/**
 * Created by AnthonyYY on 2017/7/27.
 */
import { Routes } from '@angular/router';
import {LoginComponent} from "app/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SyllabusComponent} from "./syllabus/syllabus.component";
import {EmployeeComponent} from "./employee/employee.component";
import {StudentComponent} from "./student/student.component";
import {RoleComponent} from "./role/role.component";
import {UserComponent} from "./user/user.component";
import {SchoolComponent} from "./school/school.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  //登录页
  {
    path: 'login',
    component: LoginComponent
  },
  //主页，自动跳转到课程页
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'syllabus',
        pathMatch: 'full',
      },
      //课程页面
      {
        path: 'syllabus',
        component: SyllabusComponent,
      },
      //员工页面
      {
        path: 'employees',
        component: EmployeeComponent,
      },
      //学生页面
      {
        path: 'students',
        component: StudentComponent
      },
      //角色页面
      {
        path: 'roles',
        component: RoleComponent
      },
      //用户页面
      {
        path: 'users',
        component: UserComponent
      },
      //校区页面
      {
        path: 'schools',
        component: SchoolComponent
      }
    ]
  }
];
