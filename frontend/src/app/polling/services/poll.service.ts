import { PagedListPoll, Poll } from "./../models/poll.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PollService {
  pollsUrl = environment.apiUrl + "/polls";

  constructor(private http: HttpClient) {}

  getPolls(): Observable<PagedListPoll> {
    return this.http.get<PagedListPoll>(this.pollsUrl);
  }

  getPollById(id: any): Observable<any> {
    return this.http.get(this.pollsUrl+'/' + id);
  }

  savePoll(poll: Poll): Observable<any> {
    return this.http.post(this.pollsUrl, poll);
  }

  deletePoll(pollId: any): Observable<any> {
    return this.http.delete("api/polls/" + pollId);
  }

  vote(pollId: string, selectedOption: number): Observable<any> {
    return this.http.post(
      "api/polls/" + pollId + "/vote/" + selectedOption,
      {}
    );
  }

  getPollsCreatedBy(username: any): Observable<any> {
    return this.http.get(environment.apiUrl+"/users/" + username + "/polls");
  }

  getPollsVotedBy(username: any): Observable<any> {
    return this.http.get("api/users/" + username + "/votes");
  }
}
