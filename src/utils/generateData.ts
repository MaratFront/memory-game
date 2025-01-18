function randomArr4x4() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const resultArr4x4 = arr;
  return [...resultArr4x4, ...resultArr4x4].sort(() => Math.random() - 0.5);
}
function randomArr6x6() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const resultArr6x6 = arr;
  return [...resultArr6x6, ...resultArr6x6].sort(() => Math.random() - 0.5);
}

function randomArrEmoji6x6() {
  const emojiArr = [
    "🐶",
    "😢",
    "🥳",
    "🤔",
    "🍔",
    "😊",
    "🐔",
    "😍",
    "😂",
    "👻",
    "🎃",
    "⚽️",
    "🦉",
    "🐱",
    "😅",
    "🐳",
    "😭",
    "🦄",
  ];
  const resultArr6x6 = emojiArr;
  return [...resultArr6x6, ...resultArr6x6].sort(() => Math.random() - 0.5);
}
function randomArrEmoji4x4() {
  const emojiArr = ["🐶", "😢", "🥳", "🤔", "🍔", "😊", "🐔", "😍"];
  const resultArr4x4 = emojiArr;
  return [...resultArr4x4, ...resultArr4x4].sort(() => Math.random() - 0.5);
}
export { randomArr4x4, randomArr6x6, randomArrEmoji4x4, randomArrEmoji6x6 };
