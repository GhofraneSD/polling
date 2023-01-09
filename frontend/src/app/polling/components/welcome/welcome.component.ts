import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { PagedListPoll, Poll } from '../../models/poll.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  polls!: PagedListPoll;

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().subscribe(polls => {
      console.log(polls);
      this.polls = polls;
    }, error => {
      console.log(error);
    });
  }
}
