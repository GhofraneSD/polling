import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollingRoutingModule } from './polling-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { PollComponent } from './components/poll/poll.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PollSmallComponent } from './components/poll-small/poll-small.component';
import { MyPollsComponent } from './components/my-polls/my-polls.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PollService } from './services/poll.service';
import { RouterModule } from '@angular/router';
import { PollingComponent } from './polling/polling.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    AddPollComponent,
    PollComponent,
    NavbarComponent,
    FooterComponent,
    PollSmallComponent,
    MyPollsComponent,
    PollingComponent,
    UserProfileComponent,
    ProfileCardComponent,
    
    ],
  imports: [
    SharedModule,
    RouterModule,
    NgxChartsModule,
    CommonModule,
    PollingRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,

  ],
  providers: [
    PollService,
    CommonModule,
    PollingRoutingModule,
    
  ]
})
export class PollingModule { }
