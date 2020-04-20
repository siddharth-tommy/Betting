import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agenttransfer',
  templateUrl: './agenttransfer.component.html',
  styleUrls: ['./agenttransfer.component.css']
})
export class AgenttransferComponent implements OnInit {

  constructor(    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  loginName;
  userName;
  accountType;
  credit;
  exposure;
  availableBalance;
  give;
  take;
  transfer;
  AvailableCredit;
  Created;
  LastLogin;

displayedColumns: string[] = ['userName', 'loginName', 'accountType', 'credit',
'exposure', 'availableBalance','give', 'take',
'transfer', 'status'];
dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  },
  {loginName: "agt", userName: "agt001", accountType: "Agent",credit:"2000.00",exposure:"0.00",
  availableBalance:"1000.00", give:"1382.00", take:"583.00", transfer:"", status:"Amount field is required"
  },

  {loginName: "kabir", userName: "Kabir78", accountType: "Agent",credit:"7000.00",exposure:"0.00",
  availableBalance:"7000.00", give:"500.00", take:"694.00", transfer:"", status:"Password is empty"
  }
  
];
export interface PeriodicElement {
  loginName:any;
  userName:any;
  accountType:any;
  credit:any;
  exposure:any;
  availableBalance:any;
  give:any;
  take:any;
  transfer:any;
  status:any 
}