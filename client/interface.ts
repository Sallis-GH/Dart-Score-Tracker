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

export interface IGameState {
  currentDart: string,
  previousScore: number,
  currentScore: number,
  bust: boolean,
  initialValue: number,
  initalLegScore: number,
  leg:string[][]
}