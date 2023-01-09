import { PollService } from "./../../services/poll.service";
import { Component, OnInit } from "@angular/core";
import { Poll, PollLength } from "../../models/poll.model";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { now } from "moment";

@Component({
  selector: "app-add-poll",
  templateUrl: "./add-poll.component.html",
  styleUrls: ["./add-poll.component.css"],
})
export class AddPollComponent implements OnInit {
  choices: string[] = [];
  poll: Poll = {
    id: "",
    question: "",
    expirationDateTime: new Date(),
    choices: [],
    user: "",
  };
  date: any = new Date();
  pollTimeLength!: PollLength;

  constructor(private pollService: PollService, private router: Router) {}

  ngOnInit() {}

  addChoice(choice: string) {
    if (choice !== undefined && choice != null && choice !== "") {
      this.choices.push(choice);
    }
  }

  removeChoice(choiceDelDel: string) {
    this.choices = this.choices.filter((choice) => choice !== choiceDelDel);
  }

  onSubmitPollForm(f: any) {
    this.choices.forEach((choice) => {
      if (this.poll.choices == null) {
        this.poll.choices = [
        ];
      } else {
        this.poll.choices.push({
          text: choice,
        });
      }
    });
    this.poll.expirationDateTime = new Date(f.value.expirationDateTime);
    this.poll.pollLength = this.pollTimeLength;

    console.log(this.poll);
    this.pollService.savePoll(this.poll).subscribe(
      (success) => {
        this.router.navigate([""]);
        //this.flashMessagesService.show('Successfully added!', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
      },
      (error) => {
        console.log(error);
        //this.flashMessagesService.show(JSON.stringify(error), { cssClass: 'card-panel red lighten-3', timeout: 3000 });
      }
    );
  }

  setDate(date: Date) {
    var diffDays = Math.ceil(
      (date.valueOf() - new Date().valueOf()) / (1000 * 3600)
    );
    var days = Math.trunc(diffDays / 24);
    var hours = Math.trunc(diffDays % 24);
    this.pollTimeLength = { hours: hours, days: days };
    console.log({ hours, days });
    this.date = date ? date : null;
  }
}
