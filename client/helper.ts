import { IHistory } from "./interface";

export const handleHistory = (history: IHistory[], targetHit: string, value: number) => {
  if (history[history.length - 1]?.hitTargets.length > 2) {
    return [...history, { hitTargets: [targetHit], score: value }]
  }
  history[history.length - 1].hitTargets.push(targetHit);
  history[history.length - 1].score += value
  return history;

}

export const handleScore = (score: number, value: number, targetHit: string) => {
  if (score - value === 0) {
    return targetHit.includes('D') ? 0 : score;
  }
  if (score - value < 2) {
    return score;
  }
  return score - value
}