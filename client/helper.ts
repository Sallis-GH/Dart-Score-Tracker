import { IHistory, IScoreTracker } from "./interface";

export const handleHistory = (history: IHistory[], targetHit: string, value: number, totalScore:number) => {
  const isNewLeg = history[history.length - 1].hitTargets.length > 2
  if (isNewLeg) {
    return [...history, { hitTargets: [targetHit], score: value, bust: false }]
  }

  history[history.length - 1].hitTargets.push(targetHit);
  history[history.length - 1].score += value;
  return history;
}

export const handleScore = (score: IScoreTracker, value: number, targetHit: string) => {
  const { start, current, leg } = score;
  if (current - value === 0) {
    return targetHit.includes('D') ? {...score, current:0} : score;
  }
  if (score.current - value < 2) {
    return score;
  }
  return {...score, current:(current - value)};
}