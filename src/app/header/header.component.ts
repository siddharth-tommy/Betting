import { Component, OnInit, ElementRef,Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) { }
  month=[];
  computercurrentMonth;
  computercurrentDate;
  computercurrentYear;
  computercurrentTime;
  cumputercurrenttime = new Date();
  ngOnInit() {
   this.month[0] = "Jan";
   this.month[1] = "Feb";
   this.month[2] = "Mar";
   this.month[3] = "Apr";
   this.month[4] = "May";
   this.month[5] = "June";
   this.month[6] = "July";
   this.month[7] = "Aug";
   this.month[8] = "Sep";
   this.month[9] = "Oct";
   this.month[10] = "Nov";
   this.month[11] = "Dec";
   var d = new Date();
   this.computercurrentMonth = this.month[d.getUTCMonth()];
   this.computercurrentDate = d.getUTCDate();
   this.computercurrentYear = d.getUTCFullYear();
   setInterval(() => {
    this.cumputercurrenttime = new Date();
 }, 1000);
  }
  changepassword(){
    this.dialog.open(passwordchange, {

      width: '440px',
      panelClass: 'changepassword'
    });

  }
 
}

@Component({
  selector: 'passwordchange',
  template: `   <div class="card card-outline-secondary">

  <div class="card-body">
  
          <div class="form-group">
              <label class="labelpassword" for="inputPasswordOld">Current Password</label>
              <input type="password" placeholder="Enter Old Password" class="form-control passwordtext" id="inputPasswordOld" >
          </div>
          <div class="form-group">
              <label class="labelpassword" for="inputPasswordNew">New Password</label>
              <input type="password" placeholder="Enter New Password" class="form-control passwordtext" id="inputPasswordNew" >
            
          </div>
          <div class="form-group">
              <label class="labelpassword" for="inputPasswordNewVerify">Verify</label>
              <input type="password" placeholder="Enter Confirm Password" class="form-control passwordtext" id="inputPasswordNewVerify">
             
          </div>
          <div class="form-group">
          <button class="btn btn-success btn-md float-right">Submit</button>
      </div>
          <div class="form-group">
          <button (click)="onNoClick()" class="btn btn-danger btn-md float-right mr-3">Cancel</button>
      </div>
   
  </div>
</div>`,
            styleUrls: ['./header.component.css']
})
export class passwordchange implements OnInit {
  constructor(public dialogRef: MatDialogRef<passwordchange>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}