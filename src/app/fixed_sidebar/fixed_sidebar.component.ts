import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'fixed-sidebar',
  templateUrl: './fixed_sidebar.component.html',
  styleUrls: ['./fixed_sidebar.component.css']
})
export class FixedSidebarComponent implements OnInit {
  firstsubmenu: boolean = false;
  secondsubmenu: boolean = false;
  thirdsubmenu: boolean = false;
  fourthsubmenu: boolean = false;
  fifthsubmenu: boolean = false;
  sixthsubmenu: boolean = false;
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {


  }
  firstsidemenu() {
    this.firstsubmenu = true;
    this.secondsubmenu = false;
    this.thirdsubmenu = false;
    this.fourthsubmenu = false;
    this.fifthsubmenu = false;
    this.sixthsubmenu = false;
  }
  secondsidemenu() {
    this.firstsubmenu = false;
    this.secondsubmenu = true;
    this.thirdsubmenu = false;
    this.fourthsubmenu = false;
    this.fifthsubmenu = false;
    this.sixthsubmenu = false;
  }
  thirdsidemenu() {
    this.firstsubmenu = false;
    this.secondsubmenu = false;
    this.thirdsubmenu = true;
    this.fourthsubmenu = false;
    this.fifthsubmenu = false;
    this.sixthsubmenu = false;
  }
  fourthsidemenu() {
    this.firstsubmenu = false;
    this.secondsubmenu = false;
    this.thirdsubmenu = false;
    this.fourthsubmenu = true;
    this.fifthsubmenu = false;
    this.sixthsubmenu = false;
  }
  fifthsidemenu() {
    this.firstsubmenu = false;
    this.secondsubmenu = false;
    this.thirdsubmenu = false;
    this.fourthsubmenu = false;
    this.fifthsubmenu = true;
    this.sixthsubmenu = false;
  }
  sixthsidemenu() {
    this.firstsubmenu = false;
    this.secondsubmenu = false;
    this.thirdsubmenu = false;
    this.fourthsubmenu = false;
    this.fifthsubmenu = false;
    this.sixthsubmenu = true;
  }
  agentlisting() {
    this.route.navigate(['agent_listing']);
  }
  agenttransfer() {
    this.route.navigate(['agent_transfer']);
  }
  balanceinformation() {
    this.route.navigate(['balance_information']);
  }


}


