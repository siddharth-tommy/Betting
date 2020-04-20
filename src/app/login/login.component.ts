import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) { }
  login_form:FormGroup;
  submitted = false;
  

  ngOnInit() {

    // if (localStorage.getItem('token') === '' || null) {
    //   localStorage.clear();
    // } else {
    //   this.route.navigate(['/dashboard']);
    // }
    this.login_form = new FormGroup({
      "user_name": new FormControl('',Validators.required,Validators.minLength[3]),
      "password": new FormControl('',Validators.required),
      "valid_age": new FormControl(false,Validators.requiredTrue)
      
    });
  }
  login(){
    this.submitted=true;
  }
  get check_login_form() { return this.login_form.controls; }
  // ngOnDestroy() {

  // }
  // dashboard() { this.route.navigate(['/dashboard']);}
  confirm18(){
    this.dialog.open(CommonDailog, {

      width: '307px',
      panelClass: 'confirmEighteenalert'
    });
  
}
}


@Component({
  selector: 'CommonDailog',
  template: `<h3 style="font-family:Roboto;" mat-dialog-title>Confirmation!</h3>
            <hr>
            <div mat-dialog-content>
              <p style="font-size: 13px;
              font-family: Roboto;">Underage gambling is prohibited. Please confirm if you are 18 years old and above as of today.</p>
            </div>
            <div mat-dialog-actions  align="end">
          
              <button class="btn btn-danger" style="font-family: Roboto;
              font-size: 15px;" (click)="onNoClick()">Exit</button>
            </div>`,
})
export class CommonDailog implements OnInit {
  constructor(public dialogRef: MatDialogRef<CommonDailog>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(){
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}