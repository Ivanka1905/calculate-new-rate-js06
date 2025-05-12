"use strict";

function calculateNewRate(winner, loser) {
  let newRate = 0;
  if (winner < 0 || loser < 0) {
    return "Рейтинг не може бути менше 0";
  } else {
    if (winner === 0) {
      newRate = loser.toFixed(1);
    } else if (winner < loser) {
      newRate = (loser - winner + 5) / 3 + winner;
    } else {
      const diff = winner - loser;
      if (diff >= 0 && diff <= 2) {
        newRate = winner + 2;
      } else if (diff > 2 && diff < 20) {
        newRate = winner + 1;
      } else if (diff >= 20) {
        newRate = winner;
      }
    }
    return `Рейтинг переможця ${newRate.toFixed(1)}`;
  }
}

console.log(calculateNewRate(8.456, 5.23563));
