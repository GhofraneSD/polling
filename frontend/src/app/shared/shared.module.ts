import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatListModule, MatNavList } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LayoutModule } from "@angular/cdk/layout";
import { CdkTableModule } from "@angular/cdk/table";
import { A11yModule } from "@angular/cdk/a11y";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MzdTimelineModule } from "ngx-mzd-timeline";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
//import { MatNativeDateModule } from '@angular/material/core';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from "@angular/material-moment-adapter";
import { MatNativeDateModule } from "@angular/material/core";
import { GravatarModule } from "ngx-gravatar";
import { DateAgoPipe } from "./pipes/date-ago.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../core/interceptors/auth.interceptor";
import { ChartsModule } from 'ng2-charts';



const MODULES = [
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatTreeModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatStepperModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatDatepickerModule,
  LayoutModule,
  MatGridListModule,
  MatRadioModule,
  MatMomentDateModule,
  MatNativeDateModule,
  MatPaginatorModule,
  DragDropModule,
  CdkTableModule,
  PortalModule,
  CdkStepperModule,
  A11yModule,
  ScrollingModule,
  MatTableModule,
  MatSortModule,
  MatChipsModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MzdTimelineModule,
  GravatarModule,
  FontAwesomeModule,
  FormsModule,
  ChartsModule,
  FroalaEditorModule.forRoot(),
  FroalaViewModule.forRoot(),
];

@NgModule({
  exports: [MODULES, DateAgoPipe],
  declarations: [DateAgoPipe],
  imports: [CommonModule, RouterModule, MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
