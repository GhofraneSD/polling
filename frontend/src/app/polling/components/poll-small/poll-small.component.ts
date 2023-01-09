import { Component, OnInit, Input } from "@angular/core";
import { PollService } from "../../services/poll.service";
import { Poll } from "../../models/poll.model";
import Swal from "sweetalert2";
import { VotingService } from "src/app/shared/services/voting.service";

@Component({
  selector: "app-poll-small",
  templateUrl: "./poll-small.component.html",
  styleUrls: ["./poll-small.component.css"],
})
export class PollSmallComponent implements OnInit {
  @Input() poll!: Poll;
  selected: any;
  votingEnded = false;

  constructor(
    private pollService: PollService,
    private votingService: VotingService
  ) {}

  ngOnInit() {
    const now = new Date();

    if (new Date(this.poll.expirationDateTime!).getTime() < now.getTime()) {
      this.votingEnded = true;
    }
  }

  vote(pollId: any, choiceId: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change your vote !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, save it!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.votingService.saveVote(pollId, choiceId).subscribe(
          (success) => {
            Swal.fire("Saved!", "Your vote has been saved.", "success");
          },
          (error) => {
            Swal.fire("Error!", error.error, "error");
          }
        );
      }
    });
  }
}
