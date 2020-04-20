import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'footer_gambling',
  templateUrl: './footer_gambling.component.html',
  styleUrls: ['./footer_gambling.component.css']
})
export class FooterGamblingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef
  ) { }

  

  ngOnInit() {

  
 
  }
}


