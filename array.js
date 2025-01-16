const names = [
  "baljan",
  "itgel",
  "jamiyansuren",
  "chingun",
  "telmuun",
  "chinguun",
  "nomi",
  "aygul",
  "behbat",
  "narangerel",
  "oyunbat",
  "turbat",
  "baasandash",
  "jargalsaihan",
  "tugsbileg",
  "huwituguldur",
  "ursaa",
  "ider",
  "ariunjargal",
];

function findname(findname) {
  for (let i = 0; i < names.length; i++) {
    if (findname == names[i]) {
      return i;
    }
  }
}

let findName = findname(nums);

function findmaxnum(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(findmaxnum([22, 33, 44, 55, 66]));

function ihbaga(a, b) {
  let c;
  let d;
  c = ((a - b) ** 2) ** (1 / 2);
  d = (c + a + b) / 2;
  return d;
}

console.log(ihbaga(4, 5));
