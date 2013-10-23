Function.prototype.myBind = function(obj) {
  var that = this;
  return function() {
    return that.apply(obj);
  }
}

obj = {
  name: "Earl Watts"
};

function greet() {
  console.log("hello " + this.name);
}

var boundGreet = greet.myBind(obj);
 boundGreet(); // => logs "hello Earl Watts"
//
//
// var cat = {
//   age: 5,
//
//   age_one_year: function () {
//     this.age += 1;
//   }
// };
//
// console.log(cat.age_one_year.bind(cat)());