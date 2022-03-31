// Object destructuring

const band = {
  bandName: "Wrafaze",
  bestSong: "Purnota",
  year: 1998,
  anotherBestsong: "Rupkotha",
};

const { bandName, anotherBestsong, ...restProps } = band;
console.log(anotherBestsong);

console.log(restProps);

const { bestSong: fvrtSong, year } = restProps;
console.log(fvrtSong, year);
