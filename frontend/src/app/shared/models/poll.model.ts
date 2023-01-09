export interface Choice {
    id?: number;
    label: Text;
}

export interface Poll {
    id?: number;
    body: Text;
    choices:Choice[];
  }
  