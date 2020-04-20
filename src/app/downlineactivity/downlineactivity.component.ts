import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'downlineactivity',
  templateUrl: './downlineactivity.component.html',
  styleUrls: ['./downlineactivity.component.css']
})
export class DownlineactivityComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef
  ) {
    this.activetab = 'activity';
    this.subactivetab = 'current';
    this.statementtabactive = 'P&L_Statement';
    this.activitytab = true;
    this.matched_check = true;
    this.creditstatement = true;
    this.PL_statement_table = true;
  }

  ngOnInit() {
    this.dataSource_betlist.paginator = this.paginator;

  }
  activetab: string;
  activitytab: boolean = false;
  balancetab: boolean = false;
  betlisttab: boolean = false;
  bettingtab: boolean = false;
  statementtab: boolean = false;
  transferstatementtab: boolean = false;
  netexposuretab: boolean = false;
  clientaccountstatementtab: boolean = false;

  tabchange(value: string) {
    this.activetab = value;
    if (value == 'activity') {
      this.activitytab = true;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'balance') {
      this.activitytab = false;
      this.balancetab = true;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'betlist') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = true;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'betting') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = true;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'statement') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = true;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'transferstatement') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = true;
      this.netexposuretab = false;
      this.clientaccountstatementtab = false;

    }
    if (value == 'netexposure') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = true;
      this.clientaccountstatementtab = false;

    }
    if (value == 'clientsaccountstatement') {
      this.activitytab = false;
      this.balancetab = false;
      this.betlisttab = false;
      this.bettingtab = false;
      this.statementtab = false;
      this.transferstatementtab = false;
      this.netexposuretab = false;
      this.clientaccountstatementtab = true;

    }

  }
  subactivetab: string;
  pastradiobox: boolean = false;
  subtabchange(value: string) {
    this.subactivetab = value;
    if (value == 'past') {
      this.pastradiobox = true;
    }
    else {
      this.pastradiobox = false;
    }
  }
  deletecolumn: boolean = false;
  matched_check: boolean = false;
  unmatched_check: boolean = false;
  deleted_check: boolean = false;
  deletedbetcolumn(value: string) {
    if (value == 'deleted') {
      this.deletecolumn = true;
      this.deleted_check = true;
      this.matched_check = false;
      this.unmatched_check = false;
    }
    else {
      this.deletecolumn = false;

    }
    if (value == 'matched') {
      this.matched_check = true;
      this.deleted_check = false;
      this.unmatched_check = false;
    }

    if (value == 'unmatched') {
      this.unmatched_check = true;
      this.deleted_check = false;
      this.matched_check = false;
    }
  }
  statementtabactive: string;
  creditstatement: boolean = false;
  PL_statement_table: boolean = false;
  Credit_statement_table: boolean = false;
  statementtype(value: string) {
    this.statementtabactive = value;
    if (value == 'Credit_Statement') {
      this.creditstatement = false;
      this.PL_statement_table = false;
      this.Credit_statement_table = true;
    }
    else {
      this.creditstatement = true;
    }
    if (value == 'P&L_Statement') {
      this.PL_statement_table = true;
      this.Credit_statement_table = false;
    }
  }
  agentlisting() {
    this.route.navigate(['agent_listing']);
  }
  displayedColumns: string[] = ['today', 'threedays', 'sevendays', 'thirtydays',
    'lifetime'];
  dataSource = ELEMENT_DATA;
  displayedColumns_bettingPL: string[] = ['Market', 'Start_time', 'Settled', 'Net_win'];
  dataSource_PL_Statement = ELEMENT_DATA_PL_Statement;
  displayedColumns_PL_Statement: string[] = ['Date', 'Description', 'Ip', 'From_To', 'Amount', 'Closing'];
  dataSource_credit_Statement = ELEMENT_DATA_CREDIT_Statement;
  displayedColumns_credit_Statement: string[] = ['Date', 'User_name', 'Master_name', 'Remark', 'Stake'];
  dataSource_transfer_Statement = ELEMENT_DATA_Transfer_Statement;
  displayedColumns_transfer_Statement: string[] = ['Date', 'Payer_Payee', 'Amount'];
  dataSource_netexposure = ELEMENT_DATA_Exposure;
  displayedColumns_netexposure: string[] = ['Stake', 'First_possible', 'Double_possible', 'Second_possible', 'stake', 'P_L'];
  dataSource_clientaccount = ELEMENT_DATA_Clientaccount;
  displayedColumns_clientaccount: string[] = ['Date', 'Description', 'P_L', 'Credit_limit', 'Balance'];
  dataSource_bettingPL = ELEMENT_DATA_BETTINGPL;
  displayedColumns_betlist: string[] = ['Place_date', 'Description', 'Username', 'Bet_type',
    'User_rate', 'Profit', 'Win_loss', 'IP', 'Browser_details', 'Deleted_type', 'Amount'];

  dataSource_betlist = new MatTableDataSource<PeriodicElement_Betlist>(ELEMENT_DATA_BETLIST);
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    today: "0.00", threedays: "-1958.00", sevendays: "-2118.00", thirtydays: "-1531.00", lifetime: "-1531.00"
  },

  {
    today: "0.00", threedays: "-1958.00", sevendays: "-2118.00", thirtydays: "-1531.00", lifetime: "-1531.00"
  }

];
const ELEMENT_DATA_BETLIST: PeriodicElement_Betlist[] = [
  {
    Place_date: "test", Description: "test", Username: "test", Bet_type: "test",
    User_rate: "test", Profit: "test", Win_loss: "test", IP: "test", Browser_details: "test",
    Deleted_type: "Delete", Amount: "test"
  },
  {
    Place_date: "test", Description: "test", Username: "test", Bet_type: "test",
    User_rate: "test", Profit: "test", Win_loss: "test", IP: "test", Browser_details: "test",
    Deleted_type: "Delete", Amount: "test"
  }

];
const ELEMENT_DATA_BETTINGPL: PeriodicElement_bettingPL[] = [
  {
    Market: "IPL", Start_time: "10.30", Settled: "23.00", Net_win: "2245.00"
  },
  {
    Market: "World Cup", Start_time: "10.30", Settled: "23.30", Net_win: "1531.00"
  }

];
const ELEMENT_DATA_PL_Statement: PeriodicElement_PL_Statement[] = [
  {
    Date: "2020-04-09", Description: "Opening", Ip: "127.0.0.1", From_To: "agt001/usr001", Amount: "-500", Closing: "9305.30"
  },
  {
    Date: "2020-04-13", Description: "By deposit", Ip: "127.0.0.1", From_To: "agt001/usr001", Amount: "-600", Closing: "6705.30"
  }

];
const ELEMENT_DATA_CREDIT_Statement: PeriodicElement_Credit_Statement[] = [
  {
    Date: "2020-04-11", User_name: "test", Master_name: "test", Remark: "test", Stake: "test"
  },
  {
    Date: "2020-04-14", User_name: "test", Master_name: "test", Remark: "test", Stake: "test"
  }

];
const ELEMENT_DATA_Transfer_Statement: PeriodicElement_Transfer_Statement[] = [
  {
    Date: "2020-04-11 04:47:12 PM", Payer_Payee: "usr001", Amount: "408.00"
  },
  {
    Date: "2020-04-14 08:47:12 PM", Payer_Payee: "usr001", Amount: "500.00"
  }

];
const ELEMENT_DATA_Exposure: PeriodicElement_netexposure[] = [
  {
    Stake: "0", First_possible: "0", Double_possible: "0", Second_possible: "0", stake: "0", P_L: "0"
  },
  {
    Stake: "0", First_possible: "0", Double_possible: "0", Second_possible: "0", stake: "0", P_L: "0"
  }

];
const ELEMENT_DATA_Clientaccount: PeriodicElement_clientaccount[] = [
  {
    Date: "2020-04-18", Description: "By deposit", P_L: "0", Credit_limit: "10000.00", Balance: "14356.00"
  },
  {
    Date: "2020-04-24", Description: "Opening", P_L: "1", Credit_limit: "12400.00", Balance: "16464.00"
  }

];
export interface PeriodicElement {
  today: any;
  threedays: any;
  sevendays: any;
  thirtydays: any;
  lifetime: any;
}
export interface PeriodicElement_Betlist {
  Place_date: any;
  Description: any;
  Username: any;
  Bet_type: any;
  User_rate: any;
  Profit: any;
  Win_loss: any;
  IP: any;
  Browser_details: any;
  Deleted_type: any;
  Amount: any;
}
export interface PeriodicElement_bettingPL {
  Market: any;
  Start_time: any;
  Settled: any;
  Net_win: any;
}
export interface PeriodicElement_PL_Statement {
  Date: any;
  Description: any;
  Ip: any;
  From_To: any;
  Amount: any;
  Closing: any;
}
export interface PeriodicElement_Credit_Statement {
  Date: any;
  User_name: any;
  Master_name: any;
  Remark: any;
  Stake: any;
}
export interface PeriodicElement_Transfer_Statement {
  Date: any;
  Payer_Payee: any;
  Amount: any;
}
export interface PeriodicElement_netexposure {
  Stake: any;
  First_possible: any;
  Double_possible: any;
  Second_possible: any;
  stake: any;
  P_L: any;
}
export interface PeriodicElement_clientaccount {
  Date: any;
  Description: any;
  P_L: any;
  Credit_limit: any;
  Balance: any;
}