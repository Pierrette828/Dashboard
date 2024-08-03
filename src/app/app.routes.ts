import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FileUploadModule } from 'primeng/fileupload';


export const routes: Routes = [
  { path: '',component:DashboardComponent,children:[
    { path: 'add-student',component: AddStudentComponent},
    { path: 'all-student', component: AllStudentsComponent},
    { path: 'analytics', component:AnalyticsComponent},
    { path: 'data-table', component:DataTableComponent},
    { path: 'google-map', component:GoogleMapComponent},
    { path: 'lock', component: LockComponent},
    { path: 'login', component: LoginComponent},
    { path: 'password-recovery', component:PasswordRecoveryComponent},
    { path: 'pdf-viewer', component:PdfViewerComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'sidebar', component:SidebarComponent},
    { path: 'static-table', component:StaticTableComponent},
    { path: 'widgets', component:WidgetsComponent},

  ],}, 
];
