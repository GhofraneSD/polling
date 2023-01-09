export interface Poll {
  id?: string;
  question: string;
  choices: Choice[];
  user?: string;
  pollLength?: PollLength;
  creationDateTime?: Date;
  expirationDateTime?: Date;
  totalVotes?: number;
  expired?: boolean;
  voted?: boolean;
  createdBy?: UserSummary;
  selectedChoice?: number;
}

export interface Choice {
  id?: String;
  text: String;
  voteCount?: Number;
}

export interface PollLength {
  days: number;
  hours: number;
}

export interface UserSummary {
  id: number;
  username: string;
  name: string;
}

export interface PagedListPoll {
  content: Poll[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
