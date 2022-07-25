export interface BINGO_BALL {
  letter: string;
  number: number;
  isOnBoard: boolean;
}

export interface NUMBER_RANGE {
  start: 1 | 16 | 31 | 46 | 61;
  end: 15 | 30 | 45 | 60 | 75;
}