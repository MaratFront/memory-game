interface ICardGenearator {
  Icons: {
    "6x6": () => string[];
    "4x4": () => string[];
  };
  Numbers: {
    "6x6": () => number[];
    "4x4": () => number[];
  };
}
export default ICardGenearator;
