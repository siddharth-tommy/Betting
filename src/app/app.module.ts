import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import { AgentListingComponent } from './agent-listing/agent-listing.component';
import { LoginComponent, CommonDailog } from './login/login.component';
import { balanceInformationComponent } from './balanceInformation/balanceInformation.component';
import { AgenttransferComponent } from './agenttransfer/agenttransfer.component';
import { headerComponent, passwordchange } from './header/header.component';
import { footerComponent, CommonDailog1, CommonDailog2, CommonDailog3 } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterGamblingComponent } from './footer_gambling/footer_gambling.component';
import { FixedSidebarComponent } from './fixed_sidebar/fixed_sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddAgentComponent } from './add_agent/add_agent.component';
import { DownlineactivityComponent } from './downlineactivity/downlineactivity.component';
import { 
  OwlDateTimeModule, 
  OwlNativeDateTimeModule 
} from 'ng-pick-datetime';


@NgModule({
  declarations: [
    AppComponent,
    AgentListingComponent,
    LoginComponent,
    balanceInformationComponent,
    AgenttransferComponent,
    footerComponent,
    headerComponent,
    FooterGamblingComponent,
    FixedSidebarComponent,
    AddAgentComponent,
    DownlineactivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    CdkTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSortModule,
    MatTooltipModule,
    PortalModule,
    ScrollingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [CommonDailog,CommonDailog1,CommonDailog2,CommonDailog3,passwordchange]
})
export class AppModule { }
