import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class footerComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {


  }


  prohibitedalert() {
    this.dialog.open(CommonDailog1, {

      width: '500px',
      panelClass: 'confirmEighteenalert1'
    });

  }
  Eighteenplusrulesalert() {
    this.dialog.open(CommonDailog2, {

      width: '500px',
      panelClass: 'confirmEighteenalert2'
    });

  }
  rulesalert() {
    this.dialog.open(CommonDailog3, {

      width: '680px',
      height: '600px',
      panelClass: 'confirmEighteenalert3'
    });
  }
  footergambling() {
    this.route.navigate(['footer_gambling']);
  }
}


@Component({
  selector: 'CommonDailog1',
  template: `<h3 style="font-family:Roboto;" mat-dialog-title>Prohibited Territories</h3>
            <hr>
            <div mat-dialog-content>
              <p style="font-size: 13px;
              font-family: Roboto;
            ">The right to prohibit betting on the Website by customers, whether acting alone, in a syndicate or via an AGENT or Sub-agent, where such customers are residing in Prohibited Jurisdictions. As of the Commencement Date, the following are Prohibited Jurisdictions:</p>

              <p style="font-size: 13px;
              font-family: Roboto;
             ">Algeria, Australia, Austria, Bulgaria, Canada, Cyprus, the Czech Republic, Democratic People’s Republic of Korea, Denmark, Europe, France (and French territories), Germany, Gibraltar, Iran, Iraq, Ireland, Italy, Malta, Myanmar, New Zealand, Poland, Portugal, Qatar, Romania, Singapore, South Africa, Spain, Turkey, the United Kingdom, the United States of America and its territories, and any other territories that Betfair may notify the operator</p>
            </div>
            <div mat-dialog-actions  align="end">
          
              <button class="btn btn-danger" style="font-family: Roboto;
              font-size: 15px;" (click)="onNoClick()">Exit</button>
            </div>`,
})
export class CommonDailog1 implements OnInit {
  constructor(public dialogRef: MatDialogRef<CommonDailog1>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'CommonDailog2',
  template: `<h3 style="font-family:Roboto;" mat-dialog-title>18+(underage gambling)</h3>
            <hr>
            <div mat-dialog-content>
            <p><img src="../../assets/18.png" width="30px" alt=""></p>
            <p style="font-size:14px;font-family:Roboto;font-weight: 500;">Over 18s only</p>
              <p style="font-size: 13px;
              font-family: Roboto;
         ">It is an offence for anyone under the age of 18 to open an account or to gamble on our exchange. We take its age-verification responsibilities very seriously. We carry out age-verification checks on all customers who use payment mechanisms which are available to under 18s and additionally perform random age-verification checks on customers using other forms of funding mechanisms. We may ask for information to verify your age and could restrict or suspend your account until your age is confirmed.</p>

              <p style="font-size: 13px;
              font-family: Roboto;
         ">PLEASE NOTE THAT ANYONE UNDER THE AGE OF 18 YEARS OLD FOUND TO BE USING THIS SITE WILL HAVE ANY WINNINGS FORFEITED AND MAY ALSO BE REPORTED TO THE POLICE.</p>
            </div>
            <div mat-dialog-actions  align="end">
          
              <button class="btn btn-danger" style="font-family: Roboto;
              font-size: 15px;" (click)="onNoClick()">Exit</button>
            </div>`,
})
export class CommonDailog2 implements OnInit {
  constructor(public dialogRef: MatDialogRef<CommonDailog2>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'CommonDailog3',
  template: `<div class=""><h3 style="font-family:Roboto;text-align:center;" mat-dialog-title>THE SITE RULES AND REGULATIONS</h3>
            <hr>
            <div mat-dialog-content>
            <h4 style="font-size:15px;font-family:Roboto;font-weight: 500;">PART A - INTRODUCTION</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">1.Use and interpretation</h4>
              <p style="font-size: 13px;font-family: Roboto;">These Rules and Regulations ("Rules") are part of the Site's terms and conditions.</p>

              <p style="font-size: 13px;
              font-family: Roboto;
            ">The Rules apply to all bets placed on this online betting platform ("Site"). The Rules consist of the following:</p>
            <ul class='marginleftalert'>
            <li>This INTRODUCTION section (Part A);
            </li>
            <li>The GENERAL RULES (set out in Part B below); and</li>
            <li>The SPECIFIC SPORTS RULES (set out in Part C below - these apply to certain sports).</li>
            </ul>
            <p style="font-size:13px;font-family:Roboto;">The General Rules apply to all bets unless stated otherwise in the Specific Sports Rules. If there is any inconsistency between the Specific Sports Rules and the General Rules, the Specific Sports Rules shall prevail.</p>
            <p style="font-size:13px;font-family:Roboto;">The rules governing how markets are offered, managed and/or settled are not the same for every market on each product. In certain circumstances, a bet that is settled as a winner on one product may be settled as a loser on the other product (and vice versa). Additionally, different settlement rules may apply so that, for example, bets that are a winner on one product may be settled as a dead heat or be voided on the other product. Customers must ensure that they familiarise themselves with the relevant rules that apply to the bets that they place on the Site.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">2.Customer responsibility</h4>
            <ul class='marginleftalert'>
            <li>Customers should make themselves aware of all of the Rules affecting any market on which they wish to place a bet.</li>
            <li>In particular, customers who use the "one-click" option to place bets are solely responsible for their actions and the Site shall have no liability to such customers for any errors made by customers when using this option.</li>
            </ul>
            <h4 style="font-size:15px;font-family:Roboto;font-weight: 500;">PART B - GENERAL RULES</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">1.Matters beyond the Site's reasonable control and malfunctions
            </h4>
            <p style="font-size: 13px;font-family: Roboto;">The Site is not liable for any loss or damage you may suffer because of any: act of God; power cut; trade or labour dispute; act, failure or omission of any government or authority; obstruction or failure of telecommunication services; or any other delay or failure caused by a third party or otherwise outside of our control. In such an event, the Site reserves the right to cancel or suspend access to the Site without incurring any liability.
            The Site is not liable for the failure of any equipment or software howsoever caused, wherever located or administered, or whether under its direct control or not, that may prevent the operation of the Site.
            In the event of a technological failure or error which is apparent to the customer, the customer is obliged to notify the site of such failure/error immediately. If the customer continues to place a bet in these circumstances, they shall take reasonable action to minimize any potential loss. In the absence of such action, the Site reserves the right to void a bet.
            The Site reserves the right in its absolute discretion to restrict access to the Site, or withhold funds or void any bets outstanding to a customer’s account in its absolute discretion in the event of a technological failure or other malfunction which affects the integrity of the Site whether this is under its direct control or otherwise. Customers will be notified on the Site of any such malfunction which may operate to prevent the placing of further bets or which may result in outstanding bets being voided.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">2.Managing markets In-Play</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">General</h4>
            <ul class='marginleftalert'>
            <li>For everything other than horse racing and greyhound racing, if a market is not scheduled to be turned in-play but the Site fails to suspend the market at the relevant time, then:</li>
            <p style="font-size: 13px;font-family: Roboto;">a. if the event has a scheduled 'off' time, all bets matched after that scheduled off time will be void; and</p>
            <p style="font-size: 13px;font-family: Roboto;">b. if the event does not have a scheduled 'off' time, the Site will use its reasonable endeavors to ascertain the time of the actual 'off' and all bets after the time of the 'off' determined by the Site will be void.</p>
            <li>For horse racing and greyhound racing, if a market is not scheduled to be turned in-play but the Site fails to suspend the market at the relevant time, then all bets matched after the official 'off' time will be void.</li>
            <li>The Site aims to use its reasonable endeavors to suspend in-play markets at the start of and at the end of the event. However, the Site does not guarantee that such markets will be suspended at the relevant time.</li>
            <li>Customers are responsible for managing their in-play bets always.</li>
            <li>For the purposes of in-play betting, customers should be aware that transmissions described as "live" by some broadcasters may actually be delayed or pre-recorded. The extent of any delay may vary depending on the set-up through which they are receiving pictures or data.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">3.All markets other than soccer markets - not suspending at the time of the 'off'</h4>
            <ul class='marginleftalert'>
            <li>In relation to markets which are scheduled to be turned in-play, the Site aims to use its reasonable endeavors to turn such markets in-play at the time of the 'off'. However, the Site does not guarantee that such markets will be suspended and turned in-play at the time of the 'off'.</li>
            <li>If a market is scheduled to be turned in-play but the Site does not suspend the market and cancel unmatched bets at the time of the 'off' and the market is not turned in-play with unmatched bets cancelled at any time during the event, all bets matched after the scheduled time of the 'off' will be void (in the case of horse racing and greyhound racing, bets will be void from the official rather than the scheduled 'off' time). If the event does not have a scheduled 'off' time, the Site will use its reasonable endeavors to ascertain the time of the actual 'off' and all bets after the time of the 'off' determined by the Site will be void.</li>
            <li>If a market is scheduled to be turned in-play but the Site does not suspend the market at the time of the 'off' (so unmatched bets are not cancelled at that time), but the market is intentionally turned in-play at a later time during the event, all bets matched after the time of the 'off' will stand.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Soccer markets - not suspending at kick-off or on the occurrence of a Material Event and rules relating to VAR</h4>
            <ul class='marginleftalert'>
            <li>Not suspending at kick-off</li>
            <p style="font-size: 13px;font-family: Roboto;">a. In relation to soccer markets that are scheduled to be turned in-play, the Site aims to use its reasonable endeavors to turn such markets in-play at kick-off and to suspend such markets on the occurrence of a Material Event (see definition of "Material Event" below).</p>
            <p style="font-size: 13px;font-family: Roboto;">b. The Site does not guarantee that such markets will be suspended and turned in-play at kick-off.</p>
            <p style="font-size: 13px;font-family: Roboto;">c. If a market is scheduled to be turned in-play but the Site does not suspend the market at kick-off and the market is not turned in-play at any time during the match, all bets matched after the scheduled time of the kick-off will be void.</p>
            <p style="font-size: 13px;font-family: Roboto;">d. If a market is scheduled to be turned in-play but the Site does not suspend the market at kick-off (so unmatched bets are not cancelled at that time), but the market is turned in-play at a later time during the match, all bets matched after the scheduled time of the kick-off and before the first "Material Event" will stand. However, if there has been one or more "Material Events", any bets matched between the first "Material Event" and the market being turned in-play will be void.</p>
            <li>Not suspending on the occurrence of a Material Event and cancellations of Material Events due to VAR</li>
            <p style="font-size: 13px;font-family: Roboto;">If the Site does not suspend a market on time for the occurrence of a Material Event, the Site reserves the right to void bets unfairly matched after the Material Event has occurred. Voiding of these bets may take place during the event or retrospectively once a game is completed.</p>
            <p style="font-size: 13px;font-family: Roboto;">Where a Material Event is cancelled due to a determination made via a video assistant referee, the Site will void all bets which are matched between the occurrence of the Material Event and the cancellation of it. The voiding of any such bets may take place during the event or retrospectively once a game is completed.</p>
            <li>Definition of "Material Event"</li>
            <p style="font-size: 13px;font-family: Roboto;">a. For the purpose of these Rules, a "Material Event" shall mean a goal being scored, a penalty being awarded or a player being sent off.</p>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">4.Results and market settlement</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">General</h4>
            <ul class='marginleftalert'>
            <li>Markets will be settled in accordance as set out in the Specific Sports Rules.</li>
            <li>Where the Specific Sports Rules do not specify how and on what basis a market will be settled, markets will be settled on the official result of the relevant governing body regardless of any subsequent disqualification or amendment to the result (except if an amendment is announced within 24 hours of the initial settlement of the relevant market in order to correct an error in reporting the result).</li>
            <li>If no official result of a relevant governing body is available, the result will be determined by the site (acting reasonably) using information from independent sources. In such cases, if any new information comes into the public domain within 48 hours of settlement, then the Site shall (acting reasonably) determine either: (i) whether the market should be reinstated or resettled in light of this new information; or (ii) whether or not to wait for further information before deciding whether to reinstate or resettle the market. Except where the Site has announced that it is waiting for further information, any information that comes into the public domain more than 48 hours after a market has been settled shall not be considered by the Site (regardless of whether or not such information may have led to a different result).</li>
            <li>In the event of any uncertainty about any result or potential result, the Site reserves the right to suspend settlement of any market for an unlimited period until the uncertainty can be resolved to the reasonable satisfaction of the Site. The Site reserves the right to void any market if the uncertainty regarding settlement cannot be resolved to the Site's reasonable satisfaction.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">5.Resettlements</h4>
            <ul class='marginleftalert'>
            <li>Site may settle (or part-settle) some markets before the official result is declared (or may increase a customer's 'available to bet' balance by the minimum potential winnings of that customer on a given market) purely as a customer service benefit. However, the Site reserves the right to amend the settlement of the market if: (i) the official result is different to the result on which the Site initially settled the market; or (ii) if the whole market is eventually voided (e.g. for an abandoned event).</li>
            <li>The Site reserves the right to reverse the settlement of a market if a market is settled in error (for example, a human or technical error).</li>
            <li>If The Site resettles a market, this may lead to amendments being made to a customer's balance to reflect changes in market settlement.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">6.Non-runners, withdrawals and disqualifications</h4>
            <ul class='marginleftalert'>
            <li>Subject always to the Site's right to void bets under its terms and conditions or for any exception under the Rules, if a market contains a statement that says "All bets stand, run or not" (or something similar), then all bets on a team or competitor will stand regardless of whether or not the team or competitor starts the event or takes any part in the event.</li>
            <li>If a team or competitor is disqualified, withdraws or forfeits after starting an event they will be deemed a loser providing at least one other team or competitor completes the event. If no team or competitor completes an event (having started) then all bets will be void except for bets on any markets which have been unconditionally determined.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">7.Winner with [named selection]' markets</h4>
            <ul class='marginleftalert'>
            <li>The Site may from time to time offer markets that are dependent on the participation of a particular competitor. If the competitor named in a 'Winner with …' market title does not participate in the tournament or event, then all bets on the market will be void.</li>
            <li>A team or competitor will be deemed to have participated if they have taken part to the extent necessary to record an official result or classification (including any disqualification but excluding any "did not start" or equivalent classification).</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">8.Abandonments, Cancellations, Postponements</h4>
            <p style="font-size: 13px;font-family: Roboto;">Some markets have different rules and these are listed in the Specific Sports Rules. However, where a market has no rules in the Specific Sports Rules in relation to an abandonment, cancellation and/or postponement the following shall apply.
            In relation to any match, fixture, game, individual event, or similar: If the event is not completed within three days after the scheduled completion date, then all bets on markets for this event will be void, except for bets on any markets that have been unconditionally determined.
            In relation to any tournament, competition or similar: If the event is not completed within three days after the scheduled completion date, then any markets relating to the event will be settled in accordance with the official ruling of the relevant governing body, providing such a decision is given within 90 days after the scheduled completion date. If no official ruling is announced in this 90 day period, then bets on any market relating to this event will be void, except for bets on any markets which have been unconditionally determined. If a market is to be voided but has been part-settled as a courtesy to customers, then such part-settled bets will be reversed and all bets on the market will be void.
            The Site will decide (acting reasonably) whether a market relates to a match (or similar) or a tournament (or similar).</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">9.Change of venue</h4>
            <p style="font-size: 13px;font-family: Roboto;">Some markets have different rules and these are listed in the Specific Sports Rules.
            However, if change of venue is not dealt with in the Specific Sports Rules then the following shall apply:</p>
            <ul class='marginleftalert'>
            <li>For any team sport: if the scheduled venue is changed after the market is loaded by the Site, all bets will be void only if the new venue is a home ground of the original away team</li>
            <li>For all categories or markets other than team sports: if the scheduled venue is changed after the market is loaded by the Site, all bets will stand.</li>
            <li>If there is a change in the type of scheduled surface after the market has been loaded, all bets will stand.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">10.Periods of time</h4>
            <p style="font-size: 13px;font-family: Roboto;">Some markets have different rules and these are listed in the Specific Sports Rules. However, if not dealt with in the Specific Sports Rules then the following shall apply.
            If the scheduled duration of an event is changed after the market has been loaded but before the start of the event, then all bets will be void.
            Some markets refer to the length of time until an occurrence in the event (e.g. time of first goal). If an event happens in stoppage or injury time after any regular time period then it will be deemed to have occurred at the end of the regular time period. For example, if a goal is scored in first half stoppage-time in a soccer match it will be deemed to have occurred on 45 minutes.
            Some markets refer to the length of time until an occurrence in the event (e.g. time of first goal). If an event happens in stoppage or injury time after any regular time period then it will be deemed to have occurred at the end of the regular time period. For example, if a goal is scored in first half stoppage-time in a soccer match it will be deemed to have occurred on 45 minutes.
            All bets apply to the relevant full 'regular time' period including stoppage time. Any extra-time and/or penalty shoot-out is not included.
            References within these Rules to a particular number of 'days' shall mean the end of the day local time after the expiry of the specified number of days.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">11."To qualify" markets</h4>
            <p style="font-size: 13px;font-family: Roboto;">Some markets have different rules and these are listed in the Specific Sports Rules. However, if not dealt with in the Specific Sports Rules then the following shall apply.
            Any 'to qualify' market (e.g. "to reach the final" markets) will be determined by the competitor or team that qualifies, whether or not they take part in the next round or event for which they have qualified. Markets will be settled after the qualifying stage and any subsequent disqualification or amendment to the result will not count.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">12.Dead heats</h4>
            <p style="font-size: 13px;font-family: Roboto;">Unless stated otherwise in the Specific Sports Rules the Dead Heat Rule applies to bets on a market where there are more winners than expected.
            For each bet matched on a relevant winning selection, the stake money is first reduced in proportion by multiplying it by the sum of the number of winners expected, divided by the number of actual winners (i.e. stake multiplied by (number of winners expected/number of actual winners)). The winnings are then paid to the successful backers on this 'reduced stake' (reduced stake multiplied by traded price) and the remaining stake money is paid to the appropriate layers.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">13.Miscellaneous</h4>
            <ul class='marginleftalert'>
            <li>All references to time periods in the Rules relate to the time zone in which the event takes place.For example, a reference to the start time of a football match, relates to the local kick-off time.</li>
            <li>All information supplied by the Site is done so in good faith. However, the Site cannot accept liability for any errors or omissions in respect of any information, such as the posting of prices, runners, times, scores, results or general statistics.</li>
            <li>The Site reserves the right to correct any obvious errors and shall take all reasonable steps to ensure markets are administered with integrity and transparency.</li>
            <li>If an incorrect team or competitor name is displayed (excluding minor spelling mistakes) or the incorrect number of teams, competitors or outcomes is displayed in any complete market or a market is otherwise loaded using incorrect information or includes any obvious error, then the Site reserves the right to suspend the market and (providing it acts reasonably) to void all bets matched on the market.</li>
            <li>Customers are responsible for ensuring that they satisfy themselves that the selection on which they place a bet is their intended selection.For example, in the case of a competitor bearing the same name as another individual not competing in the relevant event, the onus is on the customer to ensure that they know which competitor the Site has loaded into the relevant market and to ensure that they are placing their bet on their chosen competitor.</li>
            <li>The Site may, in its sole and absolute discretion, decide to suspend betting on a market at any time (even if such suspension is earlier than anticipated by the Rules). In the interests of maintaining integrity and fairness in the markets, the Site may also void certain bets in a market or void a whole market in its entirety.</li>
            <li>In the event that members are unable to place bets due to technical issues or for any other reason, the Site has no obligation to accept bets in an alternate manner. Any bets attempted to be placed in another manner will not be accepted.</li>
            <li>The Site reserves the right to void any bets placed on markets where an incorrect price or line was offered.</li>
            <li>The Site reserves the right to close or suspend a customer’s account if it considers that that customer has used the Site in an unfair manner, has deliberately cheated or taken unfair advantage or if the customer’s account is being used for the benefit of a third party. The Site also reserves the right to close or suspend a customer’s account if it considers that it has been used in a fraudulent manner or for illegal and/or unlawful or improper purposes.</li>
            <li>The Site reserves the right to amend the Rules at any time. Any such revision will be binding and effective immediately on the posting of such rule changes on the Site and any markets loaded after the new Rules have been posted shall be governed by the new Rules.</li>
            <li>The Site reserves the right to cancel unmatched bets to protect customers at any time.</li>
            <li>The Site shall use its reasonable endeavors to resolve disputes and shall act with fairness and integrity in exercising its rights under these rules. The Site’s decision in such cases shall be final and binding upon the customer.</li>
            <li>On the settlement of any market, amounts relating to:</li>
            <p style="font-size: 13px;font-family: Roboto;">a. winnings/losses on bets; and</p>
            <p style="font-size: 13px;font-family: Roboto;">b. any charges</p>
            <li>will be rounded up or down to the nearest two decimal places</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">14.Multiple accounts</h4>
            <p style="font-size: 13px;font-family: Roboto;">Customers are not permitted to hold multiple accounts. This includes holding an account with any other site operating on the same platform as this Site.
            Customers who continue to operate multiple accounts will have their accounts "linked" and managed accordingly which may affect the extent to which bets can be placed on the Site.
            If the Site believes, in its absolute discretion, that customers have registered and/or used more than one account, and/or acted in collusion with one or more other individuals through a number of different accounts, the Site reserves the right to void bets and/or withhold any winnings arising from such a behaviour.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">15.Use of Virtual Private Network (VPN) and Proxy Servers</h4>
            <p style="font-size: 13px;font-family: Roboto;">Customers using VPN applications to mask location or proxy servers to mask device are liable to having bets invalidated.
            Customers using VPN applications to mask location or proxy servers to mask device are liable to having bets invalidated.
            Customers appearing from multiple IP locations are also liable to having bets invalidated.</p>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">16.Cheating/Sniping</h4>
            <p style="font-size: 13px;font-family: Roboto;">Cheating of any kind is not allowed and customers bets who are deemed to be cheating are liable to have bets made void.
            Cheating includes but is not limited to; market price manipulation, court siding, sniping and commission abuse.</p>
            <h4 style="font-size:15px;font-family:Roboto;font-weight: 500;">PART C - SPECIFIC SPORTS RULES</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">1.Cricket</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">General</h4>
            <ul class='marginleftalert'>
            <li>If a ball is not bowled during a competition, series or match then all bets will be void except for those on any market that has been unconditionally determined (e.g. in the 'Completed Match' market).</li>
            <li>If a match is shortened by weather, all bets will be settled according to the official result (including for limited overs matches, the result determined by the Duckworth Lewis method).</li>
            <li>In the event of a match being decided by a bowl-off or toss of the coin, all bets will be void except for those on markets that have been unconditionally determined.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Test matches</h4>
            <ul class='marginleftalert'>
            <li>If a match starts but is later abandoned for any reason other than weather (which may include but is not limited to: dangerous or unplayable wicket or outfield; pitch vandalism; strike or boycott; crowd protests/violence; stadium damage; acts of terrorism; and acts of God), the Site reserves the right to void all bets, except for those on markets that have been unconditionally determined.</li>
            <li>If the match is not scheduled to be completed within five days after the original scheduled completion date, then all bets on markets for this event will be void, except for bets on any markets that have been unconditionally determined.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Limited Over matches</h4>
            <ul class='marginleftalert'>
            <li>If a match is declared "No Result'', bets will be void on all markets for the event except for those markets which have been unconditionally determined or where the minimum number of overs have been bowled as laid out in the market specific information.</li>
            <li>In the event of a new toss taking place on a scheduled reserve day for a limited overs match all bets that were placed after 30 minutes before the original scheduled start of play on the first day will be made void. This rule relates to all markets except those that have been unconditionally determined (e.g. in the win the toss and toss combination markets).</li>
           <li>The Site will void all Super Over bets in the event of a tied Super Over regardless of settlement rules elsewhere.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Completed Match</h4>
            <ul class='marginleftalert'>
            <li>A match will be treated as "Completed" when the required number of overs for that game have been completed as determined by the match officials. If the required number of overs for that match has not been completed, the match will be treated as "Match Abandoned" or "No Result" and bets will be settled accordingly.</li>
            <li>Please be aware that bets will carry over onto any reserve day and will be settled on the official result of the match. If a match is postponed or abandoned for any reason other than weather (which may include but is not limited to: dangerous or unplayable wicket or outfield; pitch vandalism; strike or boycott; crowd protests/violence; stadium damage; acts of terrorism; and acts of God), The Site reserves the right to void all bets on this market.</li>
          
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Sessions/Innings/Player Runs - Fancy</h4>
            <ul class='marginleftalert'>
            <li>All session/innings/player runs are based on Haar-Jeet odds format.</li>
            <li>In the event of rain reduced innings:</li>
            <p style="font-size: 13px;font-family: Roboto;">If an innings is curtailed before the original scheduled start of play, all bets will be settled.</p>
            <p style="font-size: 13px;font-family: Roboto;">If an innings is curtailed after start of play, then all bets on markets for this event will be settled up to the stipulated new innings length.</p>
            <li>In any session market, in the event a session is not completed in full because a team is all out or declared, all bets will remain valid and the market will be settled at the innings score.</li>
            <li>For Advance Session markets denoted by 'ADV' in market name only the 1st team to bat Innings markets are valid. For Test Matches the 1st innings for each team is valid.</li>
            <li>We endeavour to suspended all ADV markets during the toss but this is not guaranteed for all events and dependent on media coverage. The site reserves the right to void bets deemed to take advantage of information not generally available.</li>
            <li>If any fixture is subject to conditions that may alter the length, structure or format of the fixture in any manner (e.g. rain), ADV markets may be suspended.</li>
            <li>Batsman Runs - bets will stand if the batsman has faced one ball or is given out before first ball is faced. Score counts if batsman is Not-Out including if innings is declared. In case of rain, match abandoned etc. settled bets will be valid.</li>
            <li>Runs at Fall of 1st Wicket – This market will be settled based on the total number of runs scored at the fall of the first wicket. At least one ball must be bowled, if no wickets fall bets will be void unless settlement is already determined.</li>
            <li>Runs at Fall of Next Wicket - The score before the fall of the specified wicket determines the result of the market. If a team declares or reaches their target then the score at the conclusion of the innings will determine the settlement of the bets. Bets will be void should no more play take place following the intervention of rain, or any other delay, as the ability to reach previous quotes offered will have been removed. In case of rain, match abandoned etc. settled bets will be valid.</li>
            <li>Over Total Runs – Bets will be settled on the total number of runs scored during the 1st over of the match. The over must be completed for bets to stand unless settlement is already determined.</li>
            <li>In the instance that a market is not suspended upon the completion of the market, all bets placed after the time of completion may be made void.</li>
            <li>ADV Opening Batsmen markets are only valid if the batsmen selected in the market opens the batting. If the opening batsmen change, then the opening batsmen market in relation to the particular player who was changed will be made void.</li>
            <li>Extras and penalty runs will be included for settlement purposes with the exception of penalty runs awarded due to a slow over rate which will be excluded</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Format Specific Session Runs Rules</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Test Matches</h4>
            <ul class='marginleftalert'>
            <li>Test Matches (Meter Paari) - All bets, open or closed, on a team’s innings runs shall be void if 70 full overs are not bowled unless one team has won, is dismissed or declares prior to that point.</li>
            <li>ADV markets for both teams will be valid in test matches, regardless of which team bats first.</li>
            <li>Where a session is open for a nominated number of overs but the team declare before the end of that session, the session is made complete by the remaining number of balls from the opposing team’s innings that follows the declaration.</li>
            <li>Day 1, session 1, a minimum of 25 overs must be bowled, otherwise all bets in this session market will be void.</li>
            <li>Day 1, session 2, a minimum of 25 overs must be bowled, otherwise all bets in this session market will be void.</li>
            <li>1st Day Total Run markets will only be valid if a minimum of 80 overs are bowled on this day. Otherwise all bets in this market will be void.</li>
            <li>Test Matches - (PLAYERS METER) Individual Batsmen Runs / Partnerships - All bets, open or closed, on an individual batsman or partnership runs shall be void if 50 full overs are not bowled unless one team has won, is dismissed or declares prior to that point. Bets on partnership totals make up when the next wicket falls. If a batsman in the relevant partnership retires hurt, the partnership is treated as continuing between the remaining batsman and the batsman who comes to the wicket. A partnership is also treated as being ended by the end of an innings.</li>
            <li>Total Match Four, Total Match Sixes, Total Match Runs, Total Match Wides, Total Match Extras, Total Match Wicket, Top Batsmen, Highest Over, Innings Designated Line Markets will only be valid if the third innings is played. Otherwise, all bets will be void.</li>
            <li>Next Batsman Out markets - if a player retires injured, bets will be void in this market.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Limited Overs Matches</h4>
            <ul class='marginleftalert'>
            <li>Limited Overs Matches - (Player Meter), Individual Batsmen Runs or Partnerships - In a limited overs match where bets may be made on an individual batsman or partnership runs in-play and the innings is curtailed or subject to any reduction in overs, then these markets will be settled at the midpoint of the last available quote before the overs were reduced. If the innings resumes at a later time, a new market may be formed. If a customer wants a position in the new market they are required to place a new bet. If there are any subsequent reductions in overs, exactly the same rules will continue to apply i.e. the market is settled at the midpoint of the last available quote before the overs were reduced and a new market may be formed.</li>
            <li>Total Match Four,Total Match Sixes, Total Match Runs, Total Match Wides, Total Match Extras, Total Match Wicket, Top Batsmen, Highest Over, Innings Designated Line Markets will only be valid if the second innings is played. Otherwise, all bets will be void.</li>
            <li>In the event of an inning length being altered due to rain, match abandonment or any other condition, markets already settled will remain settled and all bets will remain valid. Bets in markets that are yet to be determined will be void.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Exchange Runs</h4>
            <ul class='marginleftalert'>
            <li>Bets are placed in an exchange and matched with corresponding bets.</li>
            <li>Bets will be matched at the requested run line or better.</li>
            <li>All exchange runs are based on decimal odds format.</li>
            <li>All bets are placed at 2.00 odds.</li>
            <li>Bets will be void in the following cases, regardless of whether the outcome of the bet is already unconditionally determined:</li>
            <p style="font-size: 13px;font-family: Roboto;">a. if the scheduled number of overs for the innings is reduced by rain interruption and at settlement time, the actual number of overs bowled is less than the number of overs stipulated for the market; or</p>
            <p style="font-size: 13px;font-family: Roboto;">b. if the scheduled number of overs for the innings is reduced for any other reason after the innings has begun, and at settlement time, the reduced number of scheduled overs is less than the number of overs stipulated for the market.</p>
            <li>Please note that if the batting side reach their target within the total amount of stipulated overs or have been bowled out and the innings hasn’t been reduced in overs to less than the stipulated number of overs for the market, the market will be settled as complete.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Soccer</h4>
            <ul class='marginleftalert'>
            <li>If the Site does not suspend a market on time for the occurrence of a Material Event, the Site reserves the right to void bets unfairly matched after the Material Event has occurred. Voiding of these bets may take place during the event or retrospectively once a game is completed.</li>
            <li>If a match has not started (or if the Site believes that a match will not have started) by 23:59 (local time) on its scheduled start date, then all bets will be void unless the Site has knowledge that the match has been rescheduled to be played within three days of its original start date.</li>
            <li>If a match starts but is later abandoned or postponed and the Site believes that the match will not have been completed by 23:59 (local time) on its scheduled start date, then all markets, with the exception of any unconditionally determined markets, will be void unless the Site has knowledge that the match has been rescheduled to be played within three days of its original start date. If the Site does have knowledge that the game will be played within three days and the game is played within three days, then all bets will stand except if the match is restarted from the beginning. If the match is restarted from the beginning then all bets matched before the market went in-play will stand, but any bets placed in-play will be void, except for any bets placed in-play on markets which have been unconditionally determined, which will stand.</li>
            <li>For Friendly matches, all bets apply to the full duration of play according to the match officials, plus any stoppage time. If a friendly match starts but is later abandoned or postponed and is not completed (i.e. the full duration of play according to match officials, plus any stoppage time) within three days of the scheduled start date, all bets will be void except for those on markets which have been unconditionally determined. In the case of ambiguity over the official result from match officials, the outcome will be determined by the Site (acting reasonably) using information from independent sources.</li>
            <li>Match odds bets apply to the full duration of play according to the match officials, plus any stoppage time. They do not include any result given after Extra Time or Penalties.</li>
            <li>If an official fixture lists different team details to those listed on the Site (for example, the team name, reserves, age group, gender, etc), then all bets matched on the affected markets will be void. In all other cases, bets will stand (including instances where a team name is listed without specifying the term 'XI' in the name). If an official fixture is shown on the Site under an incorrect competition name, then the Site reserves the right to void all bets matched on the affected markets.</li>
            <li>If a team is disqualified, thrown out or otherwise removed from a league, one of the following will apply:</li>
            <li>If this happens before the relevant season has started, all bets on all affected markets will be void (except for those on markets which have been unconditionally determined);</li>
            <li>If this happens after relevant season has started, all affected markets will stand and the team will be deemed to be relegated and all bets on that team will be settled accordingly in all relevant markets (assuming, of course, that it is not subsequently reinstated before the end of the season).</li>
            <li>The relevant season will be deemed to have started once the first league game has been played. For the purposes of this rule, markets relating to individual matches will not be deemed to be "affected markets".</li>
            <li>For 'top goalscorer' markets only the goals scored in the league or competition stated in the Market Information count. For example, if a player joins a club mid-season any goals scored in a different league will not count, however goals scored for a different club in the same league will count. Own goals will not count.</li>
            <li>In markets which relate to the number of incidents to occur, such as 'number of corners', these will be determined on the basis of the number taken, rather than awarded.</li>
            <li>For markets that relate to the number of bookings given, the number of corners taken, any goalscorer or the time of a particular goal, the result will be determined by the Site (acting reasonably) using information from independent sources. In such cases, if any new information comes into the public domain within 48 hours of settlement, then the Site shall (acting reasonably) determine either: (i) whether the market should be reinstated or resettled in light of this new information; or (ii) to wait for further information before deciding whether to reinstate or resettle the market. Except where the Site has announced that it is waiting for further information, any information that comes into the public domain more than 48 hours after a market has been settled shall not be considered by the Site (regardless of whether or not such information may have led to a different result).</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">2.Tennis</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">General / Exchange Markets</h4>
            <ul class='marginleftalert'>
            <li>If a player or pairing retires or is disqualified in any match, the player or pairing progressing to the next round (or winning the tournament in the case of a final) will be deemed the winner. However if less than one set has been completed at the time of the retirement or disqualification then all bets relating to that individual match will be void.</li>
            <li>All bets will stand regardless of changes to scheduled venues, including any changes to a different type of surface.</li>
            <li>If the scheduled duration of a match is reduced or increased in the number of games/sets required to win, all bets will be void except for those on markets which have been unconditionally determined. Please note that this does not apply to 'Match Odds' or 'Set Winner' markets on Davis Cup matches or 'dead rubber' matches that have been shortened from five sets to three sets after the market has been loaded, provided that the match has been shortened in accordance with the competition's rules.</li>
            <li>Where markets are offered on individual games or sets within a match, a retirement or disqualification during a game or set will render bets on that game or set market and all individual game or set markets void except those on markets which have been unconditionally determined.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Fancy Markets</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Retirement or Disqualification:</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">1. Head to Head Matchups:</h4>
            <ul class='marginleftalert'>
            <li>One full set must be completed for Money Line wagers to stand. If less than 1 set is completed, all Money Line wagers will be considered void. The winner of the match is the participant declared the victor by the umpire of the match.Example: Nadal trails 0-6, 0-2 vs Djokovic and Djokovic is forced to retire due to injury (or disqualification). All money line wagers stand. Nadal is declared the winner while Djokovic is deemed the loser. All other bets on the Spread, total, team total and sets betting will be void regardless of current score.</li>
            <li>If a player retires before the 1st set is completed, all wagers on the match will be considered void.Example: Nadal leads 2-0 vs Djokovic who retires due to injury. All wagers considered void.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">2. First Set Betting:</h4>
            <ul class='marginleftalert'>
            <li>If the first set is not completed because of a player retirement or disqualification, all bets on the match will be considered void. Such wagers will be cancelled and the monies refunded. If the first set in a match is completed, the wagers are graded and will stand on that line.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">3. Sets Betting: (Set Handicap)</h4>
            <ul class='marginleftalert'>
            <li>If a tennis match is not completed because of a player retirement or disqualification, all Set betting wagers will be considered void. Such wagers will be cancelled and the monies refunded.Example: If we offer Player A (-1.5 sets or -2.5 sets) vs Player B (+1.5 sets or +2.5 sets) the match must be completed. If the match is not completed, wagers on that line are void. If we offer Player A to win exactly 2 sets to 1 or Player B to win exactly 2 sets to 1, those lines would be cancelled and refunded in the case of a retirement as well.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">4. Handicap and Total Games Betting: (Match Totals)</h4>
            <ul class='marginleftalert'>
            <li>If a tennis match is not completed because of a player retirement or disqualification, all Handicap and Total Games bets will be considered void, regardless of the score of the match. Such wagers will be cancelled and the monies refunded.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">5. Proposition Betting: (To Win Set)</h4>
            <ul class='marginleftalert'>
            <li>If a tennis match is not completed because of a player retirement or disqualification, all proposition wagers will be considered void. Such wagers will be cancelled and the monies refunded, with some exceptions pertaining to propositions that require the completion of an individual set.Example: To Win 1st Set (Must Complete 1st Set)</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">6. Team Total Betting: (Player Totals)</h4>
            <ul class='marginleftalert'>
            <li>If a match ends with a player retirement, the team total bets for each individual player will be voided and graded as no action. A match must be completed for team total bets to be graded as action.</li>
            <li>If one of the players does not start the match, or tournament, all team total bets associated with that match will be graded as no action.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Delay or Suspension:</h4>
            <ul class='marginleftalert'>
            <li>If a tennis match is completed, without retirement or disqualification, all wagers stand as written. A delay in the start of a match will not affect the standing of wagers, nor will a suspension, as long as play is resumed and the match completed.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Pro Set:</h4>
            <ul class='marginleftalert'>
            <li>If a match is decided on a Pro Set, instead of the normal length of the match, all wagers are refunded except wagers on the 1st set line.</li>
            <li>If a match plays with a super tie-break as or is switched to having a super tie-break, then all wagers will be refunded on that match except for the 1st set winner and money line winner. The 1st set winner will have action and will be graded as normal.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Change of Venue or Playing Surface:</h4>
            <ul class='marginleftalert'>
            <li>All bets stand regardless of any change of venue, court surface, changing from indoors to outdoors and vice versa.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Davis and Federation Cup:</h4>
            <ul class='marginleftalert'>
            <li>All bets stand regardless of any change of venue, court surface, changing from indoors to outdoors and vice versa.Example: A match is scheduled for 5 sets, but only 3 sets can be played because of weather. The leader at the end of 3 sets would be declared the winner of the match. All wagers are refunded except wagers on the 1st set winner line.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Live Betting (All pre-game rules apply to live wagering in addition to):</h4>
            <ul class='marginleftalert'>
            <li>The next point must be played for wagers to have action. If either player retires before the next point is played, all wagers taken since the last point are refunded.</li>
            <li>If the first set is not completed, all bets on the outcome of the match (spread, money line, next set and total) will be void. All bets on a specific game will stand, provided that game was completed in its entirety.</li>
            <li>Individual Sets Betting: If the stated set is not completed, all live wagers will be voided.</li>
            <li>Handicap and Total Games Betting: If a tennis match is not completed because of a player retirement or disqualification, all live wagers on Handicap and Total Games will be voided. The wagers will be cancelled and the monies refunded. Note this also applies to live wagers on lines such as: Rafael Nadal to win Set 2 or Novak Djokovic to win Set 3.</li>
            <li>When betting on an individual game, only the score of that specific game is taken into consideration to determine the winner of the game. If the stated game is not completed, all live wagers on the game will be voided.For example, when wagering on A. Murray Game 5 of Set 1, the winner of game 5 will determine the winner of this bet.</li>
            <li>If any subsequent games are not played, bets on those specific games will be void.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Greyhound racing</h4>
            <ul class='marginleftalert'>
            <li>All bets (excluding those struck on ante-post and Australian licensed markets) are placed on trap numbers. Greyhound names are displayed for information purposes only.</li>
            <li>Markets will be determined according to the official result at the time the track gives the result green light status, either in the form of an announcement or by display. Subsequent disqualifications, appeals or amendments to the result will be disregarded.</li>
            <li>If a non-runner or reserve runner is declared, then all bets prior to the update of the market on the Site will be void and all unmatched bets including 'Take SP' and 'keep' bets will be cancelled (except for certain SP bets as set out in Paragraph 10.5 of Part B above).</li>
            <li>If there are no finishers in any race or any race is declared void before the official result is declared then all bets will be void.</li>
            <li>If the scheduled venue is changed after the market has been loaded by the Site, all bets will be void.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Australian Specific Non-Runner Rules</h4>
            <ul class='marginleftalert'>
            <li>Notwithstanding the above, the following rules apply to declared non-runners in Australian greyhound markets</li>
            <li>If a greyhound becomes a notified non runner after the market is loaded but prior to the commencement of the race it will be removed and all bets on the market, matched prior to the update of the market on the Site, will be voided</li>
            <li>If, following the completion of a race, the stewards declare a greyhound a non-runner, the Site will resettle the market and will void all bets that were placed on that runner only. The Site will then apply a reduction factor to all bets placed on the winner (or placegetters in the case of place markets) based on that runner's weighted average price.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Horseracing</h4>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">General</h4>
            <ul class='marginleftalert'>
            <li>All individual race markets will be determined according to the official result at the time of the 'weigh-in' announcement (or equivalent). Subsequent disqualifications, appeals or amendments to the result will be disregarded.</li>
            <li>If a race is abandoned or otherwise declared void, or in the event of a walkover, all bets on that race will be void</li>
            <li>If the scheduled venue is changed after the market has been loaded by the Site, all bets will be void.</li>
            <li>Where a race does not take part on its scheduled day, all bets will be void.</li>
            <li>If a scheduled surface type is changed (e.g. turf to dirt) all bets will stand.</li>
            <li>Horseracing Exchange Multiples are based on the Site's 'day of the race' markets (and not the Site's ante-post markets). The Site's horse racing ante-post rules do not therefore apply in relation to horse racing Exchange Multiples.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">The Site Non-Runner Rule</h4>
            <ul class='marginleftalert'>
            <li>The Site's non-runner rule relates to the adjustment of odds on bets already matched when a horse in a race is declared a non-runner. In order to make the adjustment the Site applies a reduction factor to the remaining runners. The reduction factor allocated to a non-runner is a calculation (the details of which are described below) of that horse's chances of winning (or being placed, etc as appropriate) and is applied to bets already matched on the other runners in the relevant market or markets.</li>
            <li>Any horse listed when the relevant market is loaded which does not subsequently come under starter's orders is deemed to be a non-runner.</li>
            <li>When the market is loaded each horse is given a 'reduction factor', based on a forecast price, which is expressed as a percentage. These reduction factors may be updated periodically at the discretion of the Site based on trading in the market, but after approximately 15 minutes (approximately 5 minutes for Australian and US markets) from the scheduled 'off' time of a given race, they will be updated only in exceptional circumstances. The current reduction factor percentage for each horse can be viewed on the 'info' page on the Site website or by asking the Helpdesk.</li>
            <li>Reductions will be made to both win and place markets but applied differently (as described below), and horses will have a different reduction factor for each market.</li>
            <li>As soon as the Site becomes aware that a horse is an official non-runner or a highly likely non-runner, following a statement to the press from connections, the following will happen:</li>
            <li>All matched bets on that horse will be void and the horse will be removed from the market.</li>
            <li>In the win market: if the reduction factor of the non-runner is 2.5% or greater, the traded price of all the matched bets on the remaining horses will be reduced by an amount equal to the non-runner's final reduction factor and all the unmatched offers to lay will be cancelled. If the non-runner's reduction factor is less than 2.5%, reductions will not be applied and unmatched bets will not be cancelled.</li>
            <li>In the place market the reduction factor of all non-runners will be applied (even if less than 2.5%) and the potential winnings in relation to matched bets on the remaining horses will be reduced by an amount equal to the non-runner's final reduction factor. Only if the non-runner's reduction factor is 4.0% or greater will all the unmatched offers to lay be cancelled.</li>
            <li>All the reduction factors on the remaining horses will be adjusted to reflect their improved chance of winning.</li>
            <li>Reduction factors are not applied to bets which are struck in-play. However, if a market is turned in-play prematurely by error (or, for example, there is a false start), all bets matched during this time will be subject to any later reduction factor, provided the market is turned out of play before the race commences. In the event of a late withdrawal, the Site reserves the right to remove the runner after completion of the race. In this case only those bets matched prior to the off will be affected by a reduction factor. </li>
            <li>In the event of a non-runner being removed from a race in error or following incorrect information regarding a runner's participation, the Site will reinstate both the runner and all previously matched bets associated with that runner. All bets made between the time of withdrawal and reinstatement will be void in both the place market and the win market. The reduction factor applied to matched bets at the time of withdrawal will be reversed and the original prices will become valid.</li>
            <li>Any non-runners will be removed from the relevant markets in the order in which they are brought to the Site's attention. If the Site becomes aware of more than one non-runner at the same time, it will remove the non-runners from the relevant markets in racecard order.</li>
            <li>If a runner is not included in a market because of an error or because of incorrect information regarding a runner's participation, the Site reserves the right to introduce the missing runner into the market at any time prior to settlement (even after the race has been run), provided that the Site has determined that the missing runner is not a material runner (i.e. a selection with a reduction factor of approx. 2.5% or less in the win market). In such circumstances, all pre-play unmatched and matched bets will stand, however if the runner is not introduced before the start of the race, all in-play bets will be void. However, if the missing runner is deemed to be a material runner, then the malformed market will be void and a new market will be loaded if possible.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">How the Reductions are applied for Exchange markets</h4>
            <ul class='marginleftalert'>
            <li>In the win market, reductions will be made on the traded price.For example: if the non-runner's final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - traded price of 8.0 would become 6.0 etc. And these might be further reduced if another horse is subsequently declared a non-runner.For example: if the non-runner's final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - - traded price of 8.0 would become 6.0. If the each Way terms were 1/5th odds for 3 places, the corresponding price for the Place portion of the bet would reduce from 2.4 to 2.0.</li>
            <li>In the place market, reductions will be made to the potential winnings on the bet only, and not the traded price.For example: if the non-runner's final reduction factor is 25% the potential winnings on all previously matched bets on the other horses will be reduced by 25% - a traded price of 8.0 would become 6.25.For example a £70. If there is a non-runner with a reduction factor of 25% in the race, that factor will be applied to the £70 of potential winnings leaving potential winnings of £52.50. Therefore the revised traded price will be 6.25.</li>
            <li>The traded price may be further reduced if any other horse(s) is subsequently declared a non-runner, however odds cannot be reduced below 1.01.</li>
            <li>Reserves: A reserve runner may appear in the relevant markets but will have a non-applicable reduction factor until the Site has received confirmation that it is a confirmed runner, in which case an applicable reduction factor may apply to it.</li>
            <li>For the avoidance of doubt, any reduction factor applicable to a non-runner replaced by a reserve, will be applied to all bets struck on the relevant markets, prior to the removal from those markets of such non-runner by the Site. Likewise, should a reserve runner become a confirmed runner but subsequently become a non-runner, any reduction factor applicable to such non-runner will be applied to all bets struck on the relevant markets, prior to the removal from those markets of such non-runner by the Site.</li>
            </ul>
            <h4 style="font-size:14px;font-family:Roboto;font-weight: 500;">Additional rules</h4>
            <ul class='marginleftalert'>
            <li>Card numbers are posted as a guide only: bets are placed on a named horse.</li>
            <li>Horses will not be coupled.</li>
            <li>Where any horse(s) runs for purse money only it is deemed a non-runner for betting purposes. Should this result in the number of possible winners stated in the relevant Market Information being equal to or greater than the number of runners in the relevant Site market, all bets in the market will be void.</li>
            </ul>
            </div>
            <div mat-dialog-actions  align="end">
          
              <button class="btn btn-danger" style="font-family: Roboto;
              font-size: 15px;" (click)="onNoClick()">Exit</button>
            </div>`,
  styleUrls: ['./footer.component.css']
})
export class CommonDailog3 implements OnInit {
  constructor(public dialogRef: MatDialogRef<CommonDailog3>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
