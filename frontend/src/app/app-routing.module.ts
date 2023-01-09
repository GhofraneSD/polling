import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./core/components/login/login.component";
import { NotfoundComponent } from "./core/components/notfound/notfound.component";
import { RegisterComponent } from "./core/components/register/register.component";
import { AddressFormComponent } from "./dashboard/address-form/address-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DragDropComponent } from "./dashboard/drag-drop/drag-drop.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "",
    loadChildren: () =>
      import("./polling/polling.module").then((m) => m.PollingModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
 
  { path: "**", component: NotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
