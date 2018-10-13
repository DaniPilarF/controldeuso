import * as Category from "../constants/Category";

export const getStarsCategory = (category) => {
  switch (category) {
      case Category.AA:
          return 4;
      case Category.A:
          return 3;
      case Category.B:
          return 2;
      case Category.C:
          return 1;
      default:
          return 0;
  }
};


export const getScoreColor = (score) => {

    if (score <= 3) {
        return '#FF734E';
    }

    if (score <= 6) {
        return '#EFDB5B';
    }

    if (score <= 10) {
        return '#5BEFB8';
    }

    return '#DDD'
};
