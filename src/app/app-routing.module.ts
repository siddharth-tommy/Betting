import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { balanceInformationComponent } from './balanceInformation/balanceInformation.component';
import { AgentListingComponent } from './agent-listing/agent-listing.component';
import { AgenttransferComponent } from './agenttransfer/agenttransfer.component';
import { FooterGamblingComponent } from './footer_gambling/footer_gambling.component';
import { AddAgentComponent } from './add_agent/add_agent.component';
import { DownlineactivityComponent } from './downlineactivity/downlineactivity.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'balance_information', component: balanceInformationComponent },
  { path: 'agent_listing', component: AgentListingComponent },
  { path: 'agent_transfer', component: AgenttransferComponent },
  { path: 'footer_gambling', component: FooterGamblingComponent },
  { path: 'add_agent', component: AddAgentComponent },
  { path: 'downlineactivity', component: DownlineactivityComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then(
      module => module.DashboardModule
    ),
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
