import { Component, OnInit } from "@angular/core";
import { PagedListPoll } from "../../models/poll.model";
import { PollService } from "../../services/poll.service";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import Swal from "sweetalert2";
import { UsersService } from "src/app/shared/services/users.service";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  polls!: PagedListPoll;
  profileData: any;
  username!: any;

  constructor(
    private pollService: PollService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("username");
    this.pollService.getPollsCreatedBy(this.username).subscribe(
      (polls) => {
        console.log(polls);
        this.polls = polls;
      },
      (error) => {
        Swal.fire("Error "+error.status, error.error, "error");
      }
    );
    this.userService.getUserByUsername(this.username).subscribe(
      (data) => {
        console.log(data);
        this.profileData = data;
      },
      (error) => {
        Swal.fire("Error!"+error.status, error.error, "error");
      }
    );
  }
}
