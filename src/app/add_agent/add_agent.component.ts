import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-agent',
  templateUrl: './add_agent.component.html',
  styleUrls: ['./add_agent.component.css']
})
export class AddAgentComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef
  ) { }
  
  ngOnInit() {

  
  }
  userselected:boolean=false;
  userselect(value: string){
    if(value=="user"){
       this.userselected=true;
    }
    else{
      this.userselected=false;
    }
  }
  agentlistpage(){
    this.route.navigate(['agent_listing']);
  }
 
}
