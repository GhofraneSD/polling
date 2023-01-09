import { Component, OnInit } from "@angular/core";
import { PollService } from "../../services/poll.service";
import { Choice, Poll } from "../../models/poll.model";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-poll",
  templateUrl: "./poll.component.html",
  styleUrls: ["./poll.component.css"],
})
export class PollComponent implements OnInit {
  poll: any;
  options: Choice[] = [];
  colors: string[] = [];
  labels: string[] = [];
  data: number[] = [];
  faComment = faComment;

  chartData: any = [];
  chartLabels: any = [];
  chartOptions = {
    responsive: true,
  };

  constructor(
    private pollService: PollService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params
      .pipe(switchMap((params) => this.pollService.getPollById(params["id"])))
      .subscribe({
        next: (poll) => {
          this.poll = poll;
          this.getChartsData();
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.chartData = [
      {
        data: this.data,
        label: "User Choices",
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: this.colors,
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      },
    ];
    this.chartLabels = this.labels;
    this.chartOptions = {
      responsive: true,
    };
    console.log(this.chartData);
  }

  ngOnInit() {}
  getChartsData() {
    for (let i = 0; i < this.poll.choices.length; i++) {
      var color = "#";
      var letters = "0123456789ABCDEF";
      for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.colors[i] = color;
      this.labels[i] = "choice" + (i + 1);
      this.data[i] = this.poll.choices[i].voteCount;
    }
  }
  onSelect(event: any) {
    console.log(event);
  }
}
