"use strict";

/**
 * @param {number} winner
 * @param {number} loser
 * @returns {number} new rating of winner
 */

function calculateNewRate(winner, loser) {
  if (winner < 0 || loser < 0) return -2;
  if (winner === 0) return loser;

  const diff = winner - loser;

  if (Number.isNaN(diff)) return -1;
  if (diff < 0) return (loser - winner + 5) / 3 + winner;
  if (diff <= 2) return winner + 2;
  if (diff < 20) return winner + 1;
  return winner;
}

/**
 * @param {number} number
 * @returns {string} message with calculated new rating
 */

function showMessage(number) {
  if (number === -2) return "Рейтинг не може бути менше нуля";
  if (number === -1) return "Не коректне введення";
  return `Рейтинг переможця ${number.toFixed(1)}`;
}

const newRate = calculateNewRate(13, 6);
console.log(showMessage(newRate));
