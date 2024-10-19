function randomArr4x4() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const resultArr4x4 = arr.sort(() => Math.random() - 0.5);
  return [...resultArr4x4, ...resultArr4x4];
}
function randomArr6x6() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const resultArr6x6 = arr.sort(() => Math.random() - 0.5);
  return [...resultArr6x6, ...resultArr6x6];
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
  const resultArr6x6 = emojiArr.sort(() => Math.random() - 0.5);
  return [...resultArr6x6, ...resultArr6x6];
}
function randomArrEmoji4x4() {
  const emojiArr = ["🐶", "😢", "🥳", "🤔", "🍔", "😊", "🐔", "😍"];
  const resultArr4x4 = emojiArr.sort(() => Math.random() - 0.5);
  return [...resultArr4x4, ...resultArr4x4];
}
export { randomArr4x4, randomArr6x6, randomArrEmoji4x4, randomArrEmoji6x6 };
