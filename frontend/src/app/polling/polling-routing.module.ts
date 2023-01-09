import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { AddPollComponent } from "./components/add-poll/add-poll.component";
import { MyPollsComponent } from "./components/my-polls/my-polls.component";
import { PollComponent } from "./components/poll/poll.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PollingComponent } from "./polling/polling.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: PollingComponent,
    children: [
      { path: "", redirectTo: "/welcome", pathMatch: "full" },
      { path: "welcome", component: WelcomeComponent },
      { path: "my-polls", component: MyPollsComponent },
      { path: "add-poll", component: AddPollComponent },
      { path: "poll/:id", component: PollComponent },
      { path: "profile/:username", component: UserProfileComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollingRoutingModule {}
