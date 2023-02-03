export interface IHistory {
  hitTargets: string[];
  score: number;
  bust: boolean;
}

export interface IScoreTracker {
  start: number,
  current: number,
  leg: number
}