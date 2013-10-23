
var clock = {

  run: function() {
    startingTime = new Date();
    setInterval(function(){ clock.tick() }, 1000)
  },

  tick: function() {
    startingTime.setSeconds(startingTime.getSeconds() + 1);
    console.log(startingTime.getHours() + ":" + startingTime.getMinutes() + ":" + startingTime.getSeconds());
  }
}

//clock.run();
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

for (i=0; i < 4; i++) {

}

var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft == 0) {
    console.log(completionCallback(sum));
    return sum;
  } else {
    reader.question("What numbers would you like to add?", function(num) {
      var num = parseInt(num);
      sum += num;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback)
    });
  }
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
//   return sum;
// });
//

var crazyBubbleSort = function(arr, sortCompletionCallback) {


  function askLessThan(el1, el2, callback) {
    reader.question("Is " + el1 + " smaller than " + el2 + "?", function(response) {
      if (response === "yes") {
        callback(true);
      } else {
        callback(false);
      }
    })
  }
  function performSortPass(arr, i, madeAnySwaps, callback) {
    if (i === arr.length -1) {
      sortPassCallback(madeAnySwaps);
    }


    else if (i< arr.length -1) {
      askLessThan(arr[i],arr[i+1], function(lessThan) {
        if (lessThan === false) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          var madeAnySwaps = true;
        }
        performSortPass(arr, i+1, madeAnySwaps, callback);
      });
    };
  }
  function sortPassCallback(madeAnySwaps) {
    if (madeAnySwaps === true) {
      performSortPass(arr, 0, false, sortPassCallback())
    } else {
      sortCompletionCallback(arr);
    }
  }

  sortPassCallback(true);

}

crazyBubbleSort([3, 2, 1], function (arr) { console.log(arr) });

