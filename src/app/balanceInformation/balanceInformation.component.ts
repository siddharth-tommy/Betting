import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balanceInformation',
  templateUrl: './balanceInformation.component.html',
  styleUrls: ['./balanceInformation.component.css']
})
export class balanceInformationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef
  ) { }
  
  ngOnInit() {

  
  }
 
 
}
