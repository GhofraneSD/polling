import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class VotingService {
  votingUrl = environment.apiUrl + "/polls/";

  constructor(private http: HttpClient) {}

  saveVote(pollId: any, choiceId: any): Observable<any> {
    return this.http.post(this.votingUrl + pollId + "/votes", {
      choiceId: choiceId,
    });
  }
}
