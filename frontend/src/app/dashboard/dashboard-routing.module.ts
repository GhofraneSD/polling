import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressFormComponent } from "./address-form/address-form.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { TimelineHistoryComponent } from "./timeline-history/timeline-history.component";
import { AuthGuard } from "../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "users-list", pathMatch: "full" },
      { path: "charts", component: ChartsComponent },
      { path: "address-form", component: AddressFormComponent },
      { path: "users-list", component: UsersListComponent },
      { path: "timeline-history", component: TimelineHistoryComponent },
      { path: "drag-drop", component: DragDropComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
