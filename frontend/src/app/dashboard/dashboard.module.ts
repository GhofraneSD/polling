import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { ChartsComponent } from './charts/charts.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { TimelineHistoryComponent } from './timeline-history/timeline-history.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartsComponent,
    AddressFormComponent,
    DragDropComponent,
    UsersListComponent,
    TimelineHistoryComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [],
})
export class DashboardModule { }
