export interface ClockerTableState {
  date: string;
  entries: string[];
  exits: string[];
  totalHours: number;
  id: number;
}
export interface ResultAccumulator {
  [date: string]: ClockerTableState;
}

export interface ClockerTableResult {
  [date: string]: {
    date: string;
    entries: string[];
    exits: string[];
    totalHours: number;
    id: number;
  };
}
