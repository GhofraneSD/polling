import { Component, OnInit } from '@angular/core';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-timeline-history',
  templateUrl: './timeline-history.component.html',
  styleUrls: ['./timeline-history.component.scss'],
})
export class TimelineHistoryComponent implements OnInit {
  faComment = faComment;
  constructor() {}

  ngOnInit(): void {}
}
