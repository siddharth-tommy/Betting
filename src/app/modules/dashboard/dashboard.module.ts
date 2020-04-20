import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
// import { MatDialogModule } from '@angular/material/dialog';
const dashoardRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashoardRoutes),
  ],
  exports: [
    RouterModule,
    
  ]
})
export class DashboardModule { }
