import { Router } from '@angular/router';
import { PollService } from './../../services/poll.service';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.css']
})
export class MyPollsComponent implements OnInit {

  constructor(private pollService: PollService,
    private router: Router,
    private tokenService: TokenService) { }

  polls: Poll[] = [];

  ngOnInit() {
    this.loadMyPolls();
  }

  deletePoll(id:any) {
    this.pollService.deletePoll(id)
      .subscribe(success => {
        this.loadMyPolls();
      }, error => {
        console.log(error);
      });
  }

  loadMyPolls() {
    let username = this.tokenService.getUsername();
    this.pollService.getPollsCreatedBy(username).subscribe(polls => {
      this.polls = polls;
    }, error => {
      console.log(error);
    });
  }
}
