import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
  ButtonModule,
  GrowlModule,
  InputTextModule,
  TieredMenuModule,
  MenuModule,
  PasswordModule,
  DataTableModule, PanelMenuModule, ToolbarModule, BreadcrumbModule, DialogModule, DropdownModule, ConfirmDialogModule,
  ConfirmationService
} from "primeng/primeng";

import { routes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { SchoolComponent } from './school/school.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SideMenuComponent,
    SyllabusComponent,
    StudentComponent,
    EmployeeComponent,
    SchoolComponent,
    UserComponent,
    RoleComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    BreadcrumbModule,
    DataTableModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
