function getSum(total, num) {
  return total + Math.round(num);
}

function getCombinations(valuesArray) {
  var combi = [];

  var temp = [];

  var results = [];

  var slent = Math.pow(2, valuesArray.length);

  for (var i = 0; i < slent; i++) {
    temp = [];

    for (var j = 0; j < valuesArray.length; j++) {
      if (i & Math.pow(2, j)) {
        temp.push(valuesArray[j]);
      }
    }

    if (temp.length > 0) {
      combi.push(temp);
    }
  }

  combi.sort((a, b) => a.length - b.length);

  // console.log(combi);
  for (let i = 0; i < combi.length; i++) {
    results.push(combi[i].reduce(getSum, 0));

    // console.log("array", combi[i]);
  }
  // console.log("result", results);
  let input = 19;

  for (let i = 0; i < combi.length; i++) {
    if (input === results[i]) {
      console.log("Array found", combi[i]);
    }
  }
  for (let i = 0; i < combi.length; i++) {
    if (input + 1 === results[i]) {
      console.log("Array found2", combi[i]);
    }
  }

  return combi;
}

// variable "results" stores an array with arrays string type

getCombinations([5, 2, 8, 8, 2]);
