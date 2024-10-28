interface ICardGenearator {
    Icons: {
      "6x6": () => string[];
      "4x4": () => string[];
      [key: string]: () => string[]; // Дополнительный индекс
    };
    Numbers: {
      "6x6": () => number[];
      "4x4": () => number[];
      [key: string]: () => number[]; // Дополнительный индекс
    };
  }
export default ICardGenearator;