import { TCallback } from "@shared/util/probability/types/TCallback";

function generateRacerWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfRacerWinning = Math.random();

  return (callback: TCallback) => {
    setTimeout(() => {
      callback(likelihoodOfRacerWinning);
    }, delay);
  };
}

export const ProbabilityUtil = {
  formatPercentage(value: number) {
    return Number((value * 100).toFixed(1));
  },
  getRacerWin() {
    const calculator = generateRacerWinLikelihoodCalculator();

    return new Promise<number>((resolve) => {
      calculator(resolve);
    });
  },
};
