import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-listing',
  templateUrl: './agent-listing.component.html',
  styleUrls: ['./agent-listing.component.css']
})

export class AgentListingComponent implements OnInit {

  constructor(    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addagent(){
    this.route.navigate(['add_agent']);
  }
  downlineactivity(){
    this.route.navigate(['downlineactivity']);
  }
  name: string;
  position: number;
  weight: number;
  symbol: string;
  LoginName;
  Username;
  AccountType;
  Downline;
  BettingStatus;
  Status;
  Details;
  NetExposure;
  Given;
  Take;
  CreditLimit;
  AvailableCredit;
  Created;
  LastLogin;

displayedColumns: string[] = ['LoginName', 'Username', 'AccountType', 'Downline', 'BettingStatus',
'Status', 'Details', 'Given','Take','NetExposure',
'CreditLimit', 'AvailableCredit', 'Created', 'LastLogin'];
dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {LoginName: "chulbul78", Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:2400.00,
    AvailableCredit:2000.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
  },
  {LoginName: "pandey78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:-230,Take:0.00,CreditLimit:5000.00,
    AvailableCredit:3800.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
  },
  {LoginName: "Smady21",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Deactive",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:0.00,
    AvailableCredit:0.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
  },
  {LoginName: "John54", Username:"John",AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:3000.00,
    AvailableCredit:0.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
  },
  {LoginName: "pandey78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:-2900,Take:0.00,CreditLimit:5000.00,
  AvailableCredit:3800.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "chulbul78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:2400.00,
    AvailableCredit:2000.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
  },
  {LoginName: "chulbul78", Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:2400.00,
  AvailableCredit:2000.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "pandey78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:-230,Take:0.00,CreditLimit:5000.00,
  AvailableCredit:3800.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "Smady21",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Deactive",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:0.00,
  AvailableCredit:0.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "John54", Username:"John",AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Deactive",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:3000.00,
  AvailableCredit:0.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "pandey78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:-2900,Take:0.00,CreditLimit:5000.00,
AvailableCredit:3800.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
},
{LoginName: "chulbul78",Username:"John", AccountType: "Agent", Downline: "",BettingStatus:"",Status:"Active",Details:"",NetExposure:0.00,Given:0.00,Take:0.00,CreditLimit:2400.00,
  AvailableCredit:2000.00,Created:"04/03/2020 01:49:21 PM",LastLogin:"04/03/2020 01:49:21 PM"
}
  
];
export interface PeriodicElement {
  LoginName;
  Username;
  AccountType
  Downline;
  BettingStatus;
  Status;
  Details;
  NetExposure;
  Given;
  Take;
  CreditLimit;
  AvailableCredit;
  Created;
  LastLogin
}